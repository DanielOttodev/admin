<template>
    <v-row class="fill-height">
        <v-col cols="12" md="9">
            <v-sheet height="600">
                <v-toolbar flat>
                    <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
                        Today
                    </v-btn>
                    <v-btn fab text small color="grey darken-2" @click="prev">
                        <v-icon small> mdi-chevron-left </v-icon>
                    </v-btn>
                    <v-btn fab text small color="grey darken-2" @click="next">
                        <v-icon small> mdi-chevron-right </v-icon>
                    </v-btn>
                    <v-toolbar-title v-if="$refs.calendar">
                        {{ $refs.calendar.title }}
                    </v-toolbar-title>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-calendar class="round" light ref="calendar" v-model="value" interval-minutes="60" first-interval="9"
                    @click:time="showTime" interval-height="60" color="primary" type="week" interval-count="15"
                    :events="events" :event-color="getEventColor" :event-ripple="false" @click:event="showEvent"
                    @change="getEvents" @mousedown:event="startDrag" @mousedown:time="startTime"
                    @mousemove:time="mouseMove" @mouseup:time="endDrag" @mouseleave.native="cancelDrag">
                    <template v-slot:event="{ eventSummary }">
                        <div class="v-event-draggable" v-html="eventSummary()"></div>

                    </template>



                </v-calendar>
                <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
                    <v-card color="grey lighten-4" min-width="350px" flat>
                        <v-toolbar :color="selectedEvent.color" dark>
                            <v-btn icon>
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                            </v-btn>
                            <v-btn icon>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </v-toolbar>
                        <v-card-text>
                            <span v-html="selectedEvent.details"></span>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn text color="secondary" @click="selectedOpen = false">
                                Cancel
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </v-sheet>
        </v-col>
        <v-col cols="12" md="3">
            <v-card>
                <v-card-title>Event View</v-card-title>
                <v-divider></v-divider>
                <v-card-text>Click an event in the calendar to view its summary and make quick changes!</v-card-text>
            </v-card>

        </v-col>
    </v-row>
</template>
<script>
export default {
    data: () => ({
        value: "",
        events: [],
        colors: [
            "#2196F3",
            "#3F51B5",
            "#673AB7",
            "#00BCD4",
            "#4CAF50",
            "#FF9800",
            "#757575",
        ],
        names: [
            "Meeting",
            "Holiday",
            "PTO",
            "Travel",
            "Event",
            "Birthday",
            "Conference",
            "Party",
        ],
        dragEvent: null,
        dragStart: null,
        createEvent: null,
        createStart: null,
        extendOriginal: null,
        selectedEvent: {},
        selectedElement: null,
        selectedOpen: false,
    }),
    methods: {
        prev() {
            this.$refs.calendar.prev();
        },
        next() {
            this.$refs.calendar.next();
        },
        setToday() {
            this.value = ''
        },

        startDrag({ event, timed }) {
            if (event && timed) {
                this.dragEvent = event;
                this.dragTime = null;
                this.extendOriginal = null;
            }
        },
        startTime(tms) {
            const mouse = this.toTime(tms);

            if (this.dragEvent && this.dragTime === null) {
                const start = this.dragEvent.start;

                this.dragTime = mouse - start;
            } else {
                /*
                                this.createStart = this.roundTime(mouse);
                
                                this.createEvent = {
                                    name: `Event #${this.events.length}`,
                                    color: this.rndElement(this.colors),
                                    start: this.createStart,
                                    end: this.createStart,
                                    timed: true,
                                };
                                console.log(this.createEvent);
                                this.events.push(this.createEvent);*/
            }
        },
        extendBottom(event) {
            this.createEvent = event;
            this.createStart = event.start;
            this.extendOriginal = event.end;
        },
        mouseMove(tms) {
            const mouse = this.toTime(tms);

            if (this.dragEvent && this.dragTime !== null) {
                const start = this.dragEvent.start;
                const end = this.dragEvent.end;
                const duration = end - start;
                const newStartTime = mouse - this.dragTime;
                const newStart = this.roundTime(newStartTime);
                const newEnd = newStart + duration;

                this.dragEvent.start = newStart;
                this.dragEvent.end = newEnd;
            } else if (this.createEvent && this.createStart !== null) {
                const mouseRounded = this.roundTime(mouse, false);
                const min = Math.min(mouseRounded, this.createStart);
                const max = Math.max(mouseRounded, this.createStart);

                this.createEvent.start = min;
                this.createEvent.end = max;
            }
        },
        endDrag() {
            this.dragTime = null;
            this.dragEvent = null;
            this.createEvent = null;
            this.createStart = null;
            this.extendOriginal = null;
        },
        cancelDrag() {
            if (this.createEvent) {
                if (this.extendOriginal) {
                    this.createEvent.end = this.extendOriginal;
                } else {
                    const i = this.events.indexOf(this.createEvent);
                    if (i !== -1) {
                        this.events.splice(i, 1);
                    }
                }
            }

            this.createEvent = null;
            this.createStart = null;
            this.dragTime = null;
            this.dragEvent = null;
        },
        roundTime(time, down = true) {
            const roundTo = 15; // minutes
            const roundDownTime = roundTo * 60 * 1000;

            return down
                ? time - (time % roundDownTime)
                : time + (roundDownTime - (time % roundDownTime));
        },
        toTime(tms) {
            return new Date(
                tms.year,
                tms.month - 1,
                tms.day,
                tms.hour,
                tms.minute
            ).getTime();
        },
        getEventColor(event) {
            const rgb = parseInt(event.color.substring(1), 16);
            const r = (rgb >> 16) & 0xff;
            const g = (rgb >> 8) & 0xff;
            const b = (rgb >> 0) & 0xff;

            return event === this.dragEvent
                ? `rgba(${r}, ${g}, ${b}, 0.7)`
                : event === this.createEvent
                    ? `rgba(${r}, ${g}, ${b}, 0.7)`
                    : event.color;
        },
        getEvents({ start, end }) {
            const events = [];

            const min = new Date(`${start.date}T00:00:00`).getTime();
            const max = new Date(`${end.date}T23:59:59`).getTime();
            const days = (max - min) / 86400000;
            const eventCount = this.rnd(days, days + 20);

            for (let i = 0; i < eventCount; i++) {
                const timed = this.rnd(0, 3) !== 0;
                const firstTimestamp = this.rnd(min, max);
                const secondTimestamp = this.rnd(2, timed ? 8 : 288) * 900000;
                const start = firstTimestamp - (firstTimestamp % 900000);
                const end = start + secondTimestamp;

                events.push({
                    name: this.rndElement(this.names),
                    color: this.rndElement(this.colors),
                    start,
                    end,
                    timed,
                    id: 1
                });
            }

            this.events = events;
        },
        showEvent(e) {
            console.log('clicked')
            e.nativeEvent.preventDefault();
            e.nativeEvent.stopPropagation();
            let id = e.event.id;
            this.$router.push(`/events/view?id=${e.event.id}`)

        },
        showTime(e) {
            console.log('SHOWTIME');
            this.$router.push(`/events/create?t=${e.time}&d=${e.date}`)
        },
        /* showEvent({ nativeEvent, event }) {
             const open = () => {
                 this.selectedEvent = event
                 this.selectedElement = nativeEvent.target
                 requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
             }
 
             if (this.selectedOpen) {
                 this.selectedOpen = false
                 requestAnimationFrame(() => requestAnimationFrame(() => open()))
             } else {
                 open()
             }
 
             nativeEvent.stopPropagation()
         },*/
        rnd(a, b) {
            return Math.floor((b - a + 1) * Math.random()) + a;
        },
        rndElement(arr) {
            return arr[this.rnd(0, arr.length - 1)];
        },
    },
};
</script>
<style scoped lang="scss">
.v-event-draggable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    padding-left: 6px;
}

.v-event-timed {
    user-select: none;
    -webkit-user-select: none;
}

.v-event-drag-bottom {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 4px;
    height: 4px;
    cursor: ns-resize;

    &::after {
        display: none;
        position: absolute;
        left: 50%;
        height: 4px;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
        width: 16px;
        margin-left: -8px;
        opacity: 0.8;
        content: "";
    }

    &:hover::after {
        display: block;
    }
}
</style>
<style>
.v-calendar-daily__day-interval:hover {
    cursor: pointer;
    background-color: rgba(36, 36, 36, 0.113);
    transition: all 0.15s;
}
</style>
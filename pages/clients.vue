<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>
                        Clients
                        <v-btn absolute right x-small>
                            <v-icon small>mdi-plus</v-icon> Add Client
                        </v-btn>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-autocomplete class="pa-3" rounded filled></v-autocomplete>
                    <v-simple-table>
                        <tbody>
                            <tr class="client-row">
                                <td>Jack Harlow</td>
                                <td>
                                    <v-icon left>mdi-phone</v-icon>0413864377
                                </td>
                                <td>
                                    <v-icon left>mdi-mail</v-icon> sample@email.com
                                </td>
                                <td>
                                    <v-icon left>mdi-cake</v-icon>01-12-1996
                                </td>
                                <td>
                                    <v-icon>mdi-chevron-right</v-icon>
                                </td>
                            </tr>
                        </tbody>

                    </v-simple-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style >
.client-row:hover {
    cursor: pointer;
}
</style>
<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>Clients</v-card-title>
                    <v-divider></v-divider>
                    <v-card-text class="text-center text-body-1">
                        There are no clients to show! Get started by adding a client or importing a list from a csv
                        file.
                    </v-card-text>

                    <v-card-actions class="justify-center">
                        <v-btn x-large color="primary" class="text-capitalize">Add New</v-btn>
                        <v-btn x-large outlined color="primary" class="text-capitalize">Import from CSV</v-btn>
                    </v-card-actions>

                </v-card>
                <v-card v-if="clients.length >= 1">
                    <v-card-title>
                        Clients
                        <v-btn class="primary" absolute right x-small>
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
    data: () => ({
        clients: []
    })

}
</script>

<style >
.client-row:hover {
    cursor: pointer;
}
</style>
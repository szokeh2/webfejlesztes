$(document).ready(function () {
    $("#myform").validate({
        rules: {
            veznev: "required",
            kernev: "required",
            email: {
                required: true,
                email: true
            },
            ismer: "required",
            docum: {
                required: function () {
                    return !$("input[type='checkbox']:checked").length;
                }
            },
            kerdes: "required"
        },
        messages: {
            veznev: "Kérlek, add meg a vezetéknevedet.",
            kernev: "Kérlek, add meg a keresztnevedet.",
            email: {
                required: "Az email cím megadása kötelező.",
                email: "Kérlek, adj meg egy érvényes email címet."
            },
            ismer: "Kérlek, válaszd ki, hogy ismered-e az A24 filmeket.",
            docum: "Kérlek, válassz ki legalább egy műfajt.",
            kerdes: "Kérlek, válaszolj, hogy mit gondolsz az A24 filmekről."
        }
    });
});

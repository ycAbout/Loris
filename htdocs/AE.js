var data_pt = [
];

var data_soc = [
    {"label":"Not answered","value":"not_answered"},{"label":"Blood and lymphatic system disorders","value":"10005329"},{"label":"Cardiac disorders","value":"10007541"},{"label":"Congenital, familial and genetic disorders","value":"10010331"},{"label":"Ear and labyrinth disorders","value":"10013993"},{"label":"Endocrine disorders","value":"10014698"},{"label":"Eye disorders","value":"10015919"},{"label":"Gastrointestinal disorders","value":"10017947"},{"label":"General disorders and administration site conditions","value":"10018065"},{"label":"Hepatobiliary disorders","value":"10019805"},{"label":"Immune system disorders","value":"10021428"},{"label":"Infections and infestations","value":"10021881"},{"label":"Injury, poisoning and procedural complications","value":"10022117"},{"label":"Investigations","value":"10022891"},{"label":"Metabolism and nutrition disorders","value":"10027433"},{"label":"Musculoskeletal and connective tissue disorders","value":"10028395"},{"label":"Neoplasms benign, malignant and unspecified (incl cysts and polyps)","value":"10029104"},{"label":"Nervous system disorders","value":"10029205"},{"label":"Pregnancy, puerperium and perinatal conditions","value":"10036585"},{"label":"Psychiatric disorders","value":"10037175"},{"label":"Renal and urinary disorders","value":"10038359"},{"label":"Reproductive system and breast disorders","value":"10038604"},{"label":"Respiratory, thoracic and mediastinal disorders","value":"10038738"},{"label":"Social circumstances","value":"10041244"},{"label":"Surgical and medical procedures","value":"10042613"},{"label":"Vascular disorders","value":"10047065"},{"label":"Product issues","value":"10077536"}
];

$("[name$=_meddra_pt").autocomplete({
    source: data_pt,
    select: function (event, ui) {
$(this).val(ui.item.label);
//        $("#1_MEDDRA_PT_ID").val(ui.item.label);
    }
});

$("[name$=_meddra_soc").autocomplete({
    source: data_soc,
    select: function (event, ui) {
$(this).val(ui.item.label);
    }
});

alert('test');
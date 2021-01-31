// required for async functions
import "regenerator-runtime/runtime";

// updated app.js to index.js according to parcel docs.
import snackForm from "./js/snackForm";

$("body").prepend(snackForm());

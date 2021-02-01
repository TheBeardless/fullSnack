// health check
console.log(`index.js running`);
// required for async functions
import "regenerator-runtime/runtime";

// import forms
import snackForm from "./js/snackForm";
import registerForm from "./js/user/registerForm";

// build page
// $("body").prepend(snackForm());
$("body").prepend(registerForm());

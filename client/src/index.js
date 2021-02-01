// health check
console.log(`index.js running`);
// required for async functions
import "regenerator-runtime/runtime";

// import forms
import snackForm from "./js/snack/snackForm";
import registerForm from "./js/user/registerForm";
import loginForm from "./js/user/loginForm";

// build page
$("body").prepend(snackForm());
$("body").prepend(loginForm());
$("body").prepend(registerForm());

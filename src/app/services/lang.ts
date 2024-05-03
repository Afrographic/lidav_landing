export class Lang {
    static value: string = "FR";
    static is_french = true;

    static set_english() {
        localStorage.setItem("lang", "EN");
    }

    static set_french() {
        localStorage.setItem("lang", "F");
    }

    static get_lang() {
        let user_language = navigator.language.toLowerCase();
        if (user_language == "fr-fr") {
            this.is_french = true;
            return true;
        } else {
            this.is_french = false;
            return false;
        }
    }
}
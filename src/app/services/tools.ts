export class Tools {
    static MOBILE_BREAK_POINT = 1098;

    static sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static copy(content: string) {
        let textarea = document.createElement("textarea");
        textarea.value = content;
        textarea.className = 'ghost';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }
    static async show_positive_message(message: string) {
        let info: any = document.querySelector("#positive");
        let msg: any = document.querySelector("#positive #content");
        msg.innerHTML = message;
        info.classList.add("info_visible");
        await this.sleep(3000);
        info.classList.remove("info_visible");
    }


    static open_external_link(url: string) {
        var a_tag = document.createElement('a');
        a_tag.className = 'ghost';
        a_tag.setAttribute("href", url);
        a_tag.setAttribute("target", "_blank");
        document.body.appendChild(a_tag); // required for firefox
        a_tag.click();
        a_tag.remove();
    }

    static is_mobile(): boolean {
        if (window.innerWidth <= 1000) {
            return true;
        } else {
            return false;
        }
    }


    static is_in_viewport(el: any) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

}
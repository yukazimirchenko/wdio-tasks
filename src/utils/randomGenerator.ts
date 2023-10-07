class Randoms {
    getString(str: number) {
        let random_string = '';
        let random_ascii: any;
        for(let i: any = 0; i < str; i++) {
            random_ascii = Math.floor((Math.random() * 25) + 97);
            random_string += String.fromCharCode(random_ascii)
        }
        return random_string
    }
}

export const randoms = new Randoms();
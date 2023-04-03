export default class User {
    #id
    #username
    #password
    // name
    #email
    #phone
    // photo
    // gender
    // site
    // bio
    #verified

    constructor({ id, username, password, name, email, phone, photo, gender, site, bio, verified } = {}) {
        this.#id = id;
        this.#username = username;
        this.#password = password;
        this.name = name;
        this.#email = email;
        this.#phone = phone;
        this.photo = photo;
        this.gender = gender;
        this.site = site;
        this.bio = bio;
        this.#verified = verified || false;
    }

    getId() {
        return this.#id;
    }

    getUsername() {
        return this.#username;
    }

    getPassword() {
        return this.#password;
    }

    getEmail() {
        return this.#email;
    }

    getPhone() {
        return this.#phone;
    }

    getVerified() {
        return this.#verified;
    }
}
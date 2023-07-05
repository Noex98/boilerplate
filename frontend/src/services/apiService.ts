export class apiService {
    static login = async (email: string, password: string) => {
        const url = "api/login";
        const res = await fetch(url, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        if (res.ok) return await res.json();
        throw await res.text();
    };

    static signUp = async (email: string, password: string) => {
        const url = "api/signup";
        const res = await fetch(url, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });
        if (res.ok) return await res.json();
        throw await res.text();
    };

    static logout = async () => {};

    static continueSession = async () => {};
}

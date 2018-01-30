export interface LoginForm {
    email: string;
    password: string;
}

export const defaultForm: LoginForm = {
    email: '',
    password: '',
};

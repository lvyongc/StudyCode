import Ajax from './libs/Ajax';

interface IUserQuery {
    id: number;
}

interface IUsersQuery {
    order: 'desc'|'asc';
}

interface IUserInfo {
    id: number;
    username: string;
    email: string;
}


let ajax = new Ajax({
    baseURL: '/api'
});

// ajax.options

// 我们约束来 get 的基本参数的类型，但是有的数据（参数）的类型是不固定的

export const getUser = (query?: IUserQuery)  => {
    return ajax.get<IUserQuery, IUserInfo>('/user', query);
}

export const getUsers = (query?: IUsersQuery) => {
    return ajax.get<IUsersQuery, IUserInfo[]>('/users', query);
}


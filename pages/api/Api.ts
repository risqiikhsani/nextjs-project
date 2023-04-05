import instance from "./instance";

const config = {
    headers: { 'content-type': 'multipart/form-data' }
}

const post_api = {
    get_list: (last_string: string) => {
        return instance.get(`/app/posts${last_string}`);
    },

    create: (data: unknown) => {
        return instance.post("/app/posts", data, config);
    },

    get_detail: (id: number) => {
        return instance.get(`/app/post/${id}`);
    },

    update: (id: number, data: unknown) => {
        return instance.put(`/app/post/${id}`, data, config);
    },

    del: (id: number) => {
        return instance.delete(`/app/post/${id}`);
    },

}

const comment_api = {

    create: (post_id: number, data: unknown) => {
        return instance.post(`/app/post/${post_id}/comments`, JSON.stringify(data));
    },

    get_list: (post_id: number, last_string: string) => {
        return instance.get(`/app/post/${post_id}/comments${last_string}`);
    },

    update: (id: number, data: unknown) => {
        return instance.put(`/app/comment/${id}`, JSON.stringify(data));
    },

    del: (id: number) => {
        return instance.delete(`/app/comment/${id}`);
    },
}


const reply_api = {
    create: (comment_id: number, data: unknown) => {
        return instance.post(`/app/comment/${comment_id}/replies`, JSON.stringify(data));
    },

    get_list: (comment_id: number, last_string: unknown) => {
        return instance.get(`/app/comment/${comment_id}/replies${last_string}`);
    },

    update: (id: number, data: unknown) => {
        return instance.put(`/app/reply/${id}`, JSON.stringify(data));
    },

    del: (id: number) => {
        return instance.delete(`/app/reply/${id}`);
    },

}

const like_api = {
    post_likehandler: (id: number) => {
        return instance.get(`/app/post/${id}/likehandler`);
    },

    comment_likehandler: (id: number) => {
        return instance.get(`/app/comment/${id}/likehandler`);
    },

    reply_likehandler: (id: number) => {
        return instance.get(`/app/reply/${id}/likehandler`);
    },
}

const save_api = {
    post_savehandler: (id: number) => {
        return instance.get(`/app/post/${id}/savehandler`);
    },
}

const user_api = {
    get_detail: (id: number) => {
        return instance.get(`/user-detail/${id}`);
    },

    get_list: () => {
        return instance.get(`/user-list`);
    },
}

const my_api = {
    update_user: (data: unknown) => {
        return instance.put(`/my/user`, data, config);
    },

    update_profile: (data: unknown) => {
        return instance.put(`/my/profile`, data, config);
    },
}

const request_api = {
    get_list: () => {
        return instance.get(`requests`);
    },
    get_my_waiting_list: () => {
        return instance.get(`waiting-requests`);
    },
    accept_user:(id: number) => {
        return instance.get(`requests/${id}/accept`);
    },
    decline_user:(id: number) => {
        return instance.get(`requests/${id}/accept`);
    },
    send_request:(id: number) => {
        return instance.get(`user/${id}/send_request`);
    },
    cancel_sent_request:(id: number) => {
        return instance.get(`user/${id}/cancel_sent_request`);
    },
}

const connection_api = {
    get_list:() => {
        return instance.get(`connections`);
    },
    get_user_list:(id: number) => {
        return instance.get(`user/${id}/connections`);
    },
    disconnect:(id: number) => {
        return instance.get(`user/${id}/remove_connection`);
    },
}

const notification_api = {
    get_list:(last_string: string) => {
        return instance.get(`realtime/notifications${last_string}`);
    },
}

const chatroom_api = {
    get_list:(last_string: string) => {
        return instance.get(`realtime/chatrooms${last_string}`);
    },
}

const relationship_api = {
    get_detail:(id: number) => {
        return instance.get(`user/${id}/relationship`);
    },
    update:(id: number,data: unknown) => {
        return instance.put(`user/${id}/relationship`,JSON.stringify(data));
    },
}




export { 
    post_api, 
    comment_api, 
    reply_api, 
    like_api, 
    save_api, 
    user_api ,
    my_api,
    request_api,
    connection_api,
    notification_api,
    chatroom_api,
    relationship_api,
}


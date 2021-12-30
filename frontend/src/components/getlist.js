import React, { Component } from 'react';
import { Link } from "react-router-dom";

class getlist extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/post/');
            const posts = await res.json();
            this.setState({
                posts
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <span>{item.content}</span>
                    </div>
                ))}
                <Link to="/insert">
                    <button>신규등록</button>
                </Link>
            </div>
            
        );
    }
}

export default getlist;

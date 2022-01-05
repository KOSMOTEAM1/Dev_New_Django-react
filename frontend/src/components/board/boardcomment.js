import $ from "jquery";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class boardview extends Component {

    deleteClick = (e) => {
        this.board_id = $('#org_id').val();
        axios.delete('http://127.0.0.1:8000/board/comment/delete/'+this.board_id+'/')
    }

    submitClick = (e) => {
        this.board_id = $('#board_id').val();
        this.title = $('#comment_title').val();
        this.comment_user = $('#comment_user').val();
        this.comment_content = $('#comment_content').val();

        if(this.title === '' && this.content === ''){
    
        }else{
            axios.post('http://127.0.0.1:8000/board/comment/', {
            board_id: this.board_id,
            title: this.title,
            comment_user: this.comment_user,
            comment_content: this.comment_content,
        })

      }
    }
    
    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const id = this.props.id;
            const res = await fetch(`http://127.0.0.1:8000/board/comment/${id}/`);
            const posts = await res.json();
            this.setState({
                posts
            });
            console.log(this.state)
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div class='card-footer'>  
                <form>
                    <p>
                        <input type="hidden" id="board_id" defaultValue={this.props.id}></input>
                        <input class="form-control" id="comment_title" ></input>
                    </p>
                    <p>
                        <input type="hidden" id="comment_user" defaultValue="tester"></input>
                        <input class="form-control" id="comment_content" ></input>
                    </p>
                    <button type="submit" onClick={(e) => this.submitClick(e)}>작성</button>
                </form>
                <div>
                {this.state.posts.map(item => (
                    <div key={item.id}>
                        <h5>{item.title}</h5>
                        <span>{item.comment_content}
                        <from>
                            <input type="hidden" id="org_id" placeholder={item.id} defaultValue={item.id}></input>
                            <button type="submit" onClick={(e) => this.deleteClick(e)}>삭제</button>
                        </from> 
                        </span>
                    </div>
                ))}
                </div>
            </div>
        );
    }
  }
  
export default boardview;
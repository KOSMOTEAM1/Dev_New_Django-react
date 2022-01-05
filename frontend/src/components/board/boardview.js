import $ from "jquery";
import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import Boarddetail from "./boarddetail";
import Boardcomment from "./boardcomment";

class boardview extends Component {

/*     deleteClick = (e) => {
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
        posts: [],
        posts2: []
    };

    async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const res = await fetch(`http://127.0.0.1:8000/board/${id}/`);
            const res2 = await fetch(`http://127.0.0.1:8000/board/comment/${id}/`);
            const posts = await res.json();
            const posts2 = await res2.json();
            this.setState({
                posts,
                posts2
            });
            console.log(this.state)
        } catch (e) {
            console.log(e);
        }
    } */
    render() {
        return (
            <div>
                <div class="container">
			    <div class="row d-flex justify-content-center"></div>
                <div class="col-lg-8">
                <div class="card">
                <div>
                    <Boarddetail id={this.props.match.params.id}/>
                </div>
                <div>
                    <Boardcomment id={this.props.match.params.id}/>
                </div>
                </div>
                </div>
                </div>
            </div>
        );
    }
  }
  
export default boardview;
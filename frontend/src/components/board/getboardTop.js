import $ from "jquery";
import axios from "axios";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class boardtop extends Component {
    submitClick = (e) => {
        this.id= $('#id').val();
        console.log($('#id').val()+'버튼 함수 발생')
        axios.delete('http://127.0.0.1:8000/board/'+this.id+'/')
    }

    state = {
        posts: []
    };

    async componentDidMount() {
        try {
            const res = await fetch('http://127.0.0.1:8000/board/Top/');
            const posts = await res.json();
            this.setState({
                posts
            });
            console.log(posts);
        } catch (e) {
            console.log(e);
        }
    }
 
    render() {
        return (
            <div className="container" color="bleck">
                <div className="row">
                <div className="col-lg-12">
                    {this.state.posts.map(item => (
                    <div key={item.id}>
                        <div class="card">
                            <div class="card border-primary mb-3">
                            <Link to={'/Community2/boarddetail/'+item.id+'/'} >
                                <div class="card-header">{item.title}</div>
                                <div class="card-body">
                                {item.content} 조회수: {item.readcount}
                                </div>
                                <div class="card-footer">
                                    
                                </div>
                            </Link>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            </div>
        );
        /* return (
            <div class="anime__details__review">
				<div style="width: 90%; float: none; margin: 0 auto">
					<div class="anime__review__item">
                        {this.state.posts.map(item => (
						<tr>
							<div class="card border-primary mb-3"style="max-width: 80rem; margin: auto;">
								<div class="card-header">
									<div class="row">
										<div class="col-md-10" style="vertical-align: center;">
										<h5>{item.num}/{item.title}</h5>
										</div>
										<div class="col-md-2" style="vertical-align: center; text-align: right;">
										</div>
									</div>
								</div>
								<div class="card-body">
									<div class="row">
											<div class="col-md-4">
											</div>
											<div class="col-md-8" style="text-align: left">
											    <p class="card-text">${item.content}</p>
											</div>
									</div>
								</div>
							</div>
							
						</tr>
                    ))}
                    </div>
				</div>
			</div>
        ); */
    }
}

export default boardtop;

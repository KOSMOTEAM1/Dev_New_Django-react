import $ from "jquery";
import axios from "axios";
import React, { Component } from 'react';
import { Link } from "react-router-dom";

class insert extends Component {

  submitClick = (e) => {
    this.title = $('#title').val();
    this.username = $('#username').val();
    this.content = $('#content').val();
    this.readcount = $('#readcount').val();
    this.writedate = $('#writedate').val();
    if(this.title === '' && this.content === ''){

    }else{
      axios.post('http://127.0.0.1:8000/board/', {
        title: this.title,
        username: this.username,
        content: this.content,
        readcount: this.readcount,
        writedate: this.writedate
      })
    }
  }

  

  render() {
      return (
        <div className="container" color="bleck">
              <div className="row">
              <div className="col-lg-12">
                  <h2>board insert Test</h2>
                  <form >
                  <div class="card">
                    <div class="card border-primary mb-3"></div>
                    <div class="card-header">
                      <p>
                        <input id="title" class="form-control" placeholder="title"></input>
                      </p>
                    </div>
                    <div class="card-body">
                      <p>
                        <input type="hidden" id="username" defaultValue="username" readonly="readonly"></input>
                     </p>
                      <p>
                        <textarea class="form-control" id="content" placeholder="content" rows="20"/>
                      </p>
                      <p>
                        <input type="hidden" id="readcount" defaultValue="0" readonly="readonly"></input>
                      </p>
                      <p>
                        <input type="date" class="form-control" id="writedate"></input>
                      </p>
                    </div>
                    <div class="box-footer">
                      <p>
                      <Link to="/">
                        <button type="submit" onClick={(e) => this.submitClick(e)}>작성</button>
                      </Link>
                      </p>
                    </div>
                    </div>
                  </form>
              </div>
          </div>
        </div>
      );

      
      /*return(
        <div class="row text-center" style="width: 100%">
								<div style="width: 85%; float: none; margin: 0 auto">
									<tr>
										<form id='registerForm' action="/board/write" method="post">
											<div class="card border-primary mb-3" style="max-width: 80rem; margin: auto;">
												<div class="card-header">
													<input type="text" name="title" class="form-control" placeholder="제목을 입력해 주세요">
													<input type="text" name="name" value="${user.userid}" style="display: none;" readonly>
												</div>
												
												<div class="card-body">
													<h4 class="card-title"></h4>
													<p class="card-text"><!-- 게시물 작성 -->
														<textarea class="form-control" name="content" id="exampleTextarea" rows="20"></textarea>
													</p>
													<div class="box-body"><!-- 파일첨부 -->
														<div class="form-group" id="filedropHere">
															<label for="exampleInputEmail1">File DROP Here</label>
															<div class="fileDrop"></div>
														</div>
														<div class="box-footer">
															<div>
																<hr>
															</div>
															<ul class="mailbox-attachments clearfix uploadedList"></ul>
														</div>
													</div>
													<p> <!-- 작성완료 제출 -->
														<button class="btn btn-secondary my-2 my-sm-0" type="submit">등록</button>
													</p>
												</div>
											</div>
										</form>
									</tr>
								</div>
							</div>
      ) */
  }
}

export default insert;
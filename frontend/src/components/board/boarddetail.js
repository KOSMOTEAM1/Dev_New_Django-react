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
        posts: [],
        posts2: []
    };

    async componentDidMount() {
        try {
            const id = this.props.id;
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
    }
    render() {
        return (
            <div class="card border-primary mb-3">
                <div class='card-header'>
                    <p>
                        <input class="form-control" id="title" placeholder={this.state.posts.id} defaultValue={this.state.posts.title}></input>
                    </p>
                </div>
                <div class='card-body'>
                    <p>
                    <input class="form-control" id="username" placeholder={this.state.posts.username} defaultValue={this.state.posts.username} readOnly="readOnly"></input>
                    </p>
                    <p>
                        <textarea class="form-control" id="content" placeholder={this.state.posts.content} defaultValue={this.state.posts.content} row="40"/>
                    </p>
                    <p>
                        <input class="form-control" id="readcount" placeholder={this.state.posts.readcount} defaultValue={this.state.posts.readcount} readOnly="readOnly"></input>
                    </p>
                    <p>
                        <input class="form-control" id="writedate" placeholder={this.state.posts.writedate} defaultValue={this.state.posts.writedate} readOnly="readOnly"></input>
                    </p>       
{/*                     <Link to="/">
                        <button type="submit" onClick={(e) => this.submitClick(e)}>수정</button>
                    </Link> */}
                </div>
            </div>
        );
    }
    /*render() {
        return (
            <div class="container">
			<div class="row d-flex justify-content-center">
				<div class="col-lg-8">
					<div class="blog__details__title"><!-- 게시물 번호, 작성자, 작성일자, 제목 -->
						<h6>
							${boardVO.num} - ${boardVO.name} <span> - <fmt:formatDate value="${boardVO.writeDate}" pattern="yy-MM-dd" /><span>
						</h6>
						<h2>${boardVO.title}</h2>
					</div>
					<div><!--  게시물 대표 이미지 -->
						<c:forEach items="${filename}" var="item">
							<img src="<c:url value="/imgfile${item.filename}"/>" style="max-width:100%; height: auto; margin: auto;" />
						</c:forEach>
					</div>
				</div>
				<!-- 게시물 -->			
				<div class="col-lg-10">
					<div class="blog__details__content">
						<div class="blog__details__text">
							<p>${boardVO.content}</p>
							<p><!-- 수정 삭제 권한 부여 -->
								<c:set var="I1" value="${user.userid}" />
								<c:set var="I2" value="${boardVO.name}" />
								<c:if test="${I1 eq I2}">
									<form action="/board/modify" method="Get"
										style="display: inline">
										<input type="text" name="num" value="${boardVO.num}" style="display: none;" readonly>
										<button type="submit" class="btn btn-warning" id="modifyBtn">Modify</button>
									</form>
									<form action="/board/delete" method="post"
										style="display: inline">
										<input type="text" name="num" value="${boardVO.num}" style="display: none;" readonly>
										<input type="text" name="originnum" value="${boardVO.num}" style="display: none;" readonly>
										<button type="submit" class="btn btn-danger" id="removeBtn">REMOVE</button>
									</form>
								</c:if>
								<form action="/board/list2" method="Get" style="display: inline">
									<button type="submit" class="btn btn-primary" id="goListBtn">GO LIST</button>
								</form>
							</p>
							<!-- 목록으로 돌아가기 -->
						</div>
					</div>
				</div>
				<!-- 댓글-->
				<div class="col-md-10">
					<c:set var="I1" value="${user.userid}" />
					<c:if test="${I1 != null }">
						<div class="box box-success">
							<div class="box-header">
								<h3 class="box-title">ADD NEW REPLY</h3>
							</div>
							<div class="box-body"><!-- 댓글 작성 -->
								<label for="exampleInputEmail1">Writer</label>
								<!-- 작성자 id 호출 -->
								<input class="form-control" type="text" id="newReplyWriter"	value="${user.userid}" style="display: none;" readonly>
								<input class="form-control" type="text"	placeholder="${user.userid}" readonly>
								<label for="exampleInputEmail1">Reply Text</label>
								<input class="form-control" type="text" placeholder="REPLY TEXT" id="newcomemnttext">
							</div>
							<div>
								<ul class="mailbox-attachments clearfix uploadedList"></ul>
							</div>
							<div class="box-footer"><!-- 댓글 제출 -->
								<button type="button" class="btn btn-primary" id="replyAddBtn">ADD REPLY</button>
							</div>
						</div>
					</c:if>
					<ul class="timeline" style="position: relative; z-index: 2;"><!--  댓글 목록 불러오기 -->
						<button type="button" class="btn btn-primary" id="repliesDiv" style="position: relative; z-index: 2;">RepliesList</button>
					</ul>
					<div class='text-center'>
						<ul id="pagination" class="pagination pagination-sm no-margin "></ul>
					</div>
				</div>
			</div>
		</div>
        );
    } */
  }
  
export default boardview;
from django.urls import path
from . import views

urlpatterns = [
    path('/page(?P<page>[0-9]+/$', views.ListPost.as_view()),
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    # 최신 영화이름, 오떼아이디 100개만 출력
    path('recent', views.RecentPost.as_view()),
    # 한국 영화이름, 오떼아이디 100개만 출력
    path('korea', views.KoreaPost.as_view()),
    # imdb 평점 높은 작품들 50개만 출력
    path('famous', views.FamousPost.as_view()),
    # 인기도 높은 작품들 50개만 출력
    path('popular', views.PopularPost.as_view()),
    # 오떼아이디 장르
    path('genre/<int:pk>/', views.GenredetailPost.as_view(), name="otteid"),
    # 오떼아이디 배우
    path('actor/<int:pk>/', views.ActordetailPost.as_view(), name="otteid"),
    # 오떼아이디 감독
    path('director/<int:pk>/', views.DirectordetailPost.as_view(), name="otteid"),
]
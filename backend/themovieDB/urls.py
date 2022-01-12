from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListPost.as_view()),
    path('<int:pk>/', views.DetailPost.as_view()),
    # 최신 영화이름, 오떼아이디 100개만 출력
    path('recent', views.RecentPost.as_view()),
    # 한국 영화이름, 오떼아이디 100개만 출력
    path('korea', views.KoreaPost.as_view()),
    # 오떼아이디 장르
    path('genre/<int:pk>/', views.GenredetailPost.as_view(), name="otteid"),
]
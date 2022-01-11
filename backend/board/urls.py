from django.urls import path

from . import views

urlpatterns = [
    path('', views.ListBoard.as_view()),
    path('<int:pk>/', views.DetailBoard.as_view()),
    path('Top/', views.ListBoardTop5.as_view()),
    path('comment/', views.ListComment.as_view()),
    path('comment/<int:pk>/', views.DetailComment.as_view()),
    path('comment/delete/<int:pk>/', views.deleteComment.as_view()),
]

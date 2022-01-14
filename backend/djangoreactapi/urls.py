# backend/djangoreactapi/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),

    path('apimovie/', include('themovieDB.urls')),
    path('board/', include('board.urls')),
    path('insertcnt/', include('insertcnt.urls')),
    path('user/', include('user.urls')),
    path('api/', include('post.urls')),
    path('chartapi/', include('Charts.urls')),
    path('boxapi/', include('Box.urls')),
    path('graphapi/', include('graph.urls')),
    path('weeklytop3/', include('weeklytop3.urls'))

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# backend/djangoreactapi/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('base.api.urls')),
    path('apimovie/', include('themovieDB.urls')),
    path('board/', include('board.urls')),
    path('insertcnt/', include('insertcnt.urls')),
    path('user/', include('user.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

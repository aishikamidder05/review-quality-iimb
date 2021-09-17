from django.urls import path

from django.views.decorators.csrf import csrf_exempt
from . import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    
    path('', views.index, name='home'),
    path('exit', views.exit, name="exit"),
    path('getindices', csrf_exempt(views.returnIndices), name='indices'),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

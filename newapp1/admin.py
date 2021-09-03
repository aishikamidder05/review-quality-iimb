from django.contrib import admin
from .models import  UserReview
from csvexport.actions import csvexport
# Register your models here.

class UserReviewAdmin(admin.ModelAdmin):
    actions = [csvexport]
    list_display = ('prolific_id', 'star_rating', 'review_heading', 'review_box', 'review_depth', 'ari', 'cli', 'avg')

admin.site.register(UserReview, UserReviewAdmin)
from django.contrib import admin
from .models import  UserReview , UserReviewNoIndicator, UserReview500char, RestModel
from csvexport.actions import csvexport
# Register your models here.

class UserReviewAdmin(admin.ModelAdmin):
    actions = [csvexport]
    list_display = ('prolific_id', 'star_rating', 'review_heading', 'review_box', 'review_depth', 'ari', 'cli', 'avg')

admin.site.register(UserReview, UserReviewAdmin)


class UserReviewNoIndicatorAdmin(admin.ModelAdmin):
    actions = [csvexport]
    list_display = ('prolific_id', 'star_rating', 'review_heading', 'review_box', 'review_depth', 'ari', 'cli', 'avg')

admin.site.register(UserReviewNoIndicator, UserReviewNoIndicatorAdmin)


class UserReview500charAdmin(admin.ModelAdmin):
    actions = [csvexport]
    list_display = ('prolific_id', 'star_rating', 'review_heading', 'review_box', 'review_depth', 'ari', 'cli', 'avg')

admin.site.register(UserReview500char, UserReview500charAdmin)

class RestModelAdmin(admin.ModelAdmin):
  
    list_display = ('key', 'value')

admin.site.register(RestModel, RestModelAdmin)
from django.db import models

# Create your models here.

class UserReview(models.Model):
    star_rating = models.IntegerField(null=True, blank=True)
    review_heading = models.CharField(max_length=300)
    review_box = models.TextField()


    def __str__(self):
        return self.review_heading

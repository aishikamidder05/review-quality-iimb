from django.db import models

# Create your models here.

class UserReview(models.Model):
    star_rating = models.IntegerField(null=True, blank=True)
    review_heading = models.CharField(max_length=300)
    review_box = models.TextField()
    review_depth = models.IntegerField(null=True, blank=True)
    ari = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=5)
    cli = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=5)
    avg = models.DecimalField(null=True, blank=True, max_digits=10, decimal_places=5) 
    prolific_id = models.CharField(max_length=300, null=True, blank=True)



    def __str__(self):
        return self.prolific_id

# Generated by Django 3.1.5 on 2021-09-20 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newapp1', '0005_userreview_prolific_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserReview500char',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('star_rating', models.IntegerField(blank=True, null=True)),
                ('review_heading', models.CharField(max_length=300)),
                ('review_box', models.TextField()),
                ('review_depth', models.IntegerField(blank=True, null=True)),
                ('ari', models.DecimalField(blank=True, decimal_places=5, max_digits=10, null=True)),
                ('cli', models.DecimalField(blank=True, decimal_places=5, max_digits=10, null=True)),
                ('avg', models.DecimalField(blank=True, decimal_places=5, max_digits=10, null=True)),
                ('prolific_id', models.CharField(blank=True, max_length=300, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserReviewNoIndicator',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('star_rating', models.IntegerField(blank=True, null=True)),
                ('review_heading', models.CharField(max_length=300)),
                ('review_box', models.TextField()),
                ('review_depth', models.IntegerField(blank=True, null=True)),
                ('ari', models.DecimalField(blank=True, decimal_places=5, max_digits=10, null=True)),
                ('cli', models.DecimalField(blank=True, decimal_places=5, max_digits=10, null=True)),
                ('avg', models.DecimalField(blank=True, decimal_places=5, max_digits=10, null=True)),
                ('prolific_id', models.CharField(blank=True, max_length=300, null=True)),
            ],
        ),
    ]
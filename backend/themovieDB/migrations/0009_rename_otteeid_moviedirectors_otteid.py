# Generated by Django 3.2.9 on 2022-01-13 03:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('themovieDB', '0008_auto_20220113_1052'),
    ]

    operations = [
        migrations.RenameField(
            model_name='moviedirectors',
            old_name='otteeid',
            new_name='otteid',
        ),
    ]

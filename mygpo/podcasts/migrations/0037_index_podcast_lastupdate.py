# -*- coding: utf-8 -*-
# Generated by Django 1.9.8 on 2016-07-24 13:44
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('podcasts', '0036_related_podcasts'),
    ]

    operations = [
        migrations.AlterIndexTogether(
            name='podcast',
            index_together=set([('last_update',)]),
        ),
    ]
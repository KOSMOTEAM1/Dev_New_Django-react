from django.test import TestCase
from unittest import mock
from datetime import datetime

from .models import themoviedb

class themovieModelTest(TestCase):
    def test_default_values(self):
        mock_date = datetime(2021, 3, 4, 14, 57, 11, 703055)
        with mock.patch('django.utils.timezone.now') as mock_now:
            mock_now.return_value = mock_date
            user = themoviedb.objects.create(email='test@test.test', password='12345')

        self.assertEquals(user.email, 'test@test.test')
        self.assertEquals(user.wrong_pw, 0)
        self.assertEquals(user.password_lock, None)
        self.assertEquals(user.certificated_at, None)
        self.assertEquals(user.is_active, True)
        self.assertEquals(user.is_admin, False)
        self.assertEquals(user.created_at, mock_date)
        self.assertEquals(user.updated_at, mock_date)

    def test_updated_at(self):
        mock_date = datetime(2021, 3, 4, 14, 57, 11, 703055)
        with mock.patch('django.utils.timezone.now') as mock_now:
            mock_now.return_value = mock_date
            user = User.objects.create(email='test@test.test', password='12345')

        self.assertEquals(user.created_at, mock_date)
        self.assertEquals(user.updated_at, mock_date)
        self.assertEquals(user.updated_at.strftime("%Y-%m-%d"), '2021-03-04')

        mock_update_date = datetime(2021, 3, 5, 14, 57, 11, 703055)
        with mock.patch('django.utils.timezone.now') as mock_now:
            mock_now.return_value = mock_update_date
            user.is_admin = True
            user.save()

        self.assertEquals(user.created_at, mock_date)
        self.assertEquals(user.updated_at, mock_update_date)
        self.assertEquals(user.updated_at.strftime("%Y-%m-%d"), '2021-03-05')
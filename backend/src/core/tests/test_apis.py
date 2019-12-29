from django.urls import include, path, reverse
from rest_framework.test import APITestCase, URLPatternsTestCase, APIClient
from rest_framework import status

from core.models import Account


class AccountApiTestCase(APITestCase):
    def setUp(self) -> None:
        self.client = APIClient()

    def test_create_account(self) -> None:
        """Ensure user can create account."""
        url = reverse("account-list")
        response = self.client.post(
            url,
            data={
                "name": "Cash",
                "color": Account.ColorChoices.GREEN.value,
                "initial_balance": 1000,
            },
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Account.objects.count(), 1)

    def test_retrieve_account_list(self):
        url = reverse("account-list")
        Account.objects.create(
            name="Account 1",
            color=Account.ColorChoices.GREEN.value,
            initial_balance=100,
        )
        Account.objects.create(
            name="Account 2", color=Account.ColorChoices.BLUE.value, initial_balance=200
        )

        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_retrieve_specific_account(self):
        url = reverse("account-detail", kwargs={"pk": 1})
        account_1 = Account.objects.create(
            name="Account 1",
            color=Account.ColorChoices.GREEN.value,
            initial_balance=100,
        )
        Account.objects.create(
            name="Account 2", color=Account.ColorChoices.BLUE.value, initial_balance=200
        )

        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], account_1.name)

    def test_update_account(self) -> None:
        """Ensure that use can update the whole account."""
        Account.objects.create(
            name="Account 1",
            color=Account.ColorChoices.GREEN.value,
            initial_balance=100,
        )
        url = reverse("account-detail", kwargs={"pk": 1})
        new_value = {
            "name": "Account 2",
            "color": Account.ColorChoices.BLUE.value,
            "initial_balance": 200,
        }

        response = self.client.put(url, data=new_value, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], new_value["name"])
        self.assertEqual(response.data["color"], new_value["color"])
        self.assertEqual(response.data["initial_balance"], new_value["initial_balance"])

    def test_partial_update_not_allowed(self) -> None:
        """Ensure that user cannot partial update account."""
        account = Account.objects.create(
            name="Account 1",
            color=Account.ColorChoices.GREEN.value,
            initial_balance=100,
        )
        url = reverse("account-detail", kwargs={"pk": account.id})
        new_value = {"name": "Account 2"}

        response = self.client.patch(url, data=new_value, format="json")

        self.assertEqual(response.status_code, status.HTTP_405_METHOD_NOT_ALLOWED)

    def test_delete_account(self) -> None:
        """Ensure that user can delete account"""
        account = Account.objects.create(
            name="Account 1",
            color=Account.ColorChoices.GREEN.value,
            initial_balance=100,
        )
        url = reverse("account-detail", kwargs={"pk": account.id})

        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

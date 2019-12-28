from django.test.testcases import TestCase

from core.models import Account


class AccountTestCase(TestCase):
    def test_string_representation(self) -> None:
        """Ensure that the model use 'name' for string representation."""
        account = Account(
            name="Cash", color=Account.ColorChoices.GREEN, initial_balance=1000
        )

        self.assertEquals(str(account), "Cash")

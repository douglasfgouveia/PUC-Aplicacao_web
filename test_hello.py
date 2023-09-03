import unittest
from hello import hello

class TestHello(unittest.TestCase):
    """Classe para teste unitário da função hello

    Args:
        unittest (): Classe para teste unitário
    """
    def test_hello(self):
        """Teste unitário da função hello
        """
        self.assertEqual(hello(), "Hello World XD")

if __name__ == "__main__":
    unittest.main()

from functions import hello

def test_default():
    assert hello() == "Hello, World"

def test_arguement():
    assert hello("Bholu") == "Hello, Bholu"

from pytest import cap
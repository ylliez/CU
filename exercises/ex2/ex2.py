import random
import spacy
import spacy.cli
spacy.cli.download("en_core_web_md")
nlp = spacy.load("en_core_web_md")

test = open("assets/cat.txt").read()
# test
nlp(test)
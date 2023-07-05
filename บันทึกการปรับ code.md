ปรับ
default_preamble = r"""
\usepackage[english]{babel}
\usepackage{amsmath}
\usepackage{amssymb}
"""
เป็น
default_preamble = r"""
\usepackage[english]{babel}
\usepackage[thaifont = Leelawadee UI]{thaispec}
\usepackage{amsmath}
\usepackage{amssymb}
"""



ปรับ
default_tex_compiler = "latex"
default_output_format = ".dvi"
เป็น
default_tex_compiler = "xelatex"
default_output_format = ".xdv"
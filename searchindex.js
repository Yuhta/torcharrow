Search.setIndex({"docnames": ["column", "dataframe", "dtypes", "functional", "generated/torcharrow.Column.all", "generated/torcharrow.Column.any", "generated/torcharrow.Column.append", "generated/torcharrow.Column.cast", "generated/torcharrow.Column.drop_duplicates", "generated/torcharrow.Column.drop_null", "generated/torcharrow.Column.fill_null", "generated/torcharrow.Column.filter", "generated/torcharrow.Column.flatmap", "generated/torcharrow.Column.head", "generated/torcharrow.Column.is_valid_at", "generated/torcharrow.Column.isin", "generated/torcharrow.Column.map", "generated/torcharrow.Column.tail", "generated/torcharrow.Column.to_arrow", "generated/torcharrow.Column.to_pandas", "generated/torcharrow.Column.to_pylist", "generated/torcharrow.Column.to_tensor", "generated/torcharrow.Column.transform", "generated/torcharrow.DataFrame.all", "generated/torcharrow.DataFrame.any", "generated/torcharrow.DataFrame.append", "generated/torcharrow.DataFrame.describe", "generated/torcharrow.DataFrame.drop", "generated/torcharrow.DataFrame.drop_duplicates", "generated/torcharrow.DataFrame.drop_null", "generated/torcharrow.DataFrame.fill_null", "generated/torcharrow.DataFrame.filter", "generated/torcharrow.DataFrame.flatmap", "generated/torcharrow.DataFrame.head", "generated/torcharrow.DataFrame.isin", "generated/torcharrow.DataFrame.log", "generated/torcharrow.DataFrame.map", "generated/torcharrow.DataFrame.max", "generated/torcharrow.DataFrame.mean", "generated/torcharrow.DataFrame.median", "generated/torcharrow.DataFrame.min", "generated/torcharrow.DataFrame.rename", "generated/torcharrow.DataFrame.reorder", "generated/torcharrow.DataFrame.select", "generated/torcharrow.DataFrame.sort", "generated/torcharrow.DataFrame.std", "generated/torcharrow.DataFrame.sum", "generated/torcharrow.DataFrame.tail", "generated/torcharrow.DataFrame.to_arrow", "generated/torcharrow.DataFrame.to_pandas", "generated/torcharrow.DataFrame.to_pylist", "generated/torcharrow.DataFrame.to_tensor", "generated/torcharrow.DataFrame.transform", "generated/torcharrow.DataFrame.where", "generated/torcharrow.NumericalColumn.abs", "generated/torcharrow.NumericalColumn.ceil", "generated/torcharrow.NumericalColumn.describe", "generated/torcharrow.NumericalColumn.floor", "generated/torcharrow.NumericalColumn.log", "generated/torcharrow.NumericalColumn.max", "generated/torcharrow.NumericalColumn.mean", "generated/torcharrow.NumericalColumn.median", "generated/torcharrow.NumericalColumn.min", "generated/torcharrow.NumericalColumn.round", "generated/torcharrow.NumericalColumn.std", "generated/torcharrow.NumericalColumn.sum", "generated/torcharrow.column", "generated/torcharrow.concat", "generated/torcharrow.dataframe", "generated/torcharrow.from_arrow", "generated/torcharrow.functional.bucketize", "generated/torcharrow.functional.firstx", "generated/torcharrow.functional.get_cosine_similarity", "generated/torcharrow.functional.get_jaccard_similarity", "generated/torcharrow.functional.get_max_count", "generated/torcharrow.functional.get_score_max", "generated/torcharrow.functional.get_score_min", "generated/torcharrow.functional.get_score_sum", "generated/torcharrow.functional.has_id_overlap", "generated/torcharrow.functional.id_overlap_count", "generated/torcharrow.functional.scale_to_0_1", "generated/torcharrow.functional.sigrid_hash", "generated/torcharrow.if_else", "generated/torcharrow.ilist_column.ListMethods.length", "generated/torcharrow.ilist_column.ListMethods.slice", "generated/torcharrow.ilist_column.ListMethods.vmap", "generated/torcharrow.istring_column.StringMethods.contains", "generated/torcharrow.istring_column.StringMethods.count", "generated/torcharrow.istring_column.StringMethods.endswith", "generated/torcharrow.istring_column.StringMethods.find", "generated/torcharrow.istring_column.StringMethods.findall", "generated/torcharrow.istring_column.StringMethods.isalnum", "generated/torcharrow.istring_column.StringMethods.isalpha", "generated/torcharrow.istring_column.StringMethods.isdecimal", "generated/torcharrow.istring_column.StringMethods.isdigit", "generated/torcharrow.istring_column.StringMethods.islower", "generated/torcharrow.istring_column.StringMethods.isnumeric", "generated/torcharrow.istring_column.StringMethods.isspace", "generated/torcharrow.istring_column.StringMethods.istitle", "generated/torcharrow.istring_column.StringMethods.isupper", "generated/torcharrow.istring_column.StringMethods.length", "generated/torcharrow.istring_column.StringMethods.lower", "generated/torcharrow.istring_column.StringMethods.match", "generated/torcharrow.istring_column.StringMethods.replace", "generated/torcharrow.istring_column.StringMethods.slice", "generated/torcharrow.istring_column.StringMethods.split", "generated/torcharrow.istring_column.StringMethods.startswith", "generated/torcharrow.istring_column.StringMethods.strip", "generated/torcharrow.istring_column.StringMethods.upper", "index", "torcharrow"], "filenames": ["column.rst", "dataframe.rst", "dtypes.rst", "functional.rst", "generated/torcharrow.Column.all.rst", "generated/torcharrow.Column.any.rst", "generated/torcharrow.Column.append.rst", "generated/torcharrow.Column.cast.rst", "generated/torcharrow.Column.drop_duplicates.rst", "generated/torcharrow.Column.drop_null.rst", "generated/torcharrow.Column.fill_null.rst", "generated/torcharrow.Column.filter.rst", "generated/torcharrow.Column.flatmap.rst", "generated/torcharrow.Column.head.rst", "generated/torcharrow.Column.is_valid_at.rst", "generated/torcharrow.Column.isin.rst", "generated/torcharrow.Column.map.rst", "generated/torcharrow.Column.tail.rst", "generated/torcharrow.Column.to_arrow.rst", "generated/torcharrow.Column.to_pandas.rst", "generated/torcharrow.Column.to_pylist.rst", "generated/torcharrow.Column.to_tensor.rst", "generated/torcharrow.Column.transform.rst", "generated/torcharrow.DataFrame.all.rst", "generated/torcharrow.DataFrame.any.rst", "generated/torcharrow.DataFrame.append.rst", "generated/torcharrow.DataFrame.describe.rst", "generated/torcharrow.DataFrame.drop.rst", "generated/torcharrow.DataFrame.drop_duplicates.rst", "generated/torcharrow.DataFrame.drop_null.rst", "generated/torcharrow.DataFrame.fill_null.rst", "generated/torcharrow.DataFrame.filter.rst", "generated/torcharrow.DataFrame.flatmap.rst", "generated/torcharrow.DataFrame.head.rst", "generated/torcharrow.DataFrame.isin.rst", "generated/torcharrow.DataFrame.log.rst", "generated/torcharrow.DataFrame.map.rst", "generated/torcharrow.DataFrame.max.rst", "generated/torcharrow.DataFrame.mean.rst", "generated/torcharrow.DataFrame.median.rst", "generated/torcharrow.DataFrame.min.rst", "generated/torcharrow.DataFrame.rename.rst", "generated/torcharrow.DataFrame.reorder.rst", "generated/torcharrow.DataFrame.select.rst", "generated/torcharrow.DataFrame.sort.rst", "generated/torcharrow.DataFrame.std.rst", "generated/torcharrow.DataFrame.sum.rst", "generated/torcharrow.DataFrame.tail.rst", "generated/torcharrow.DataFrame.to_arrow.rst", "generated/torcharrow.DataFrame.to_pandas.rst", "generated/torcharrow.DataFrame.to_pylist.rst", "generated/torcharrow.DataFrame.to_tensor.rst", "generated/torcharrow.DataFrame.transform.rst", "generated/torcharrow.DataFrame.where.rst", "generated/torcharrow.NumericalColumn.abs.rst", "generated/torcharrow.NumericalColumn.ceil.rst", "generated/torcharrow.NumericalColumn.describe.rst", "generated/torcharrow.NumericalColumn.floor.rst", "generated/torcharrow.NumericalColumn.log.rst", "generated/torcharrow.NumericalColumn.max.rst", "generated/torcharrow.NumericalColumn.mean.rst", "generated/torcharrow.NumericalColumn.median.rst", "generated/torcharrow.NumericalColumn.min.rst", "generated/torcharrow.NumericalColumn.round.rst", "generated/torcharrow.NumericalColumn.std.rst", "generated/torcharrow.NumericalColumn.sum.rst", "generated/torcharrow.column.rst", "generated/torcharrow.concat.rst", "generated/torcharrow.dataframe.rst", "generated/torcharrow.from_arrow.rst", "generated/torcharrow.functional.bucketize.rst", "generated/torcharrow.functional.firstx.rst", "generated/torcharrow.functional.get_cosine_similarity.rst", "generated/torcharrow.functional.get_jaccard_similarity.rst", "generated/torcharrow.functional.get_max_count.rst", "generated/torcharrow.functional.get_score_max.rst", "generated/torcharrow.functional.get_score_min.rst", "generated/torcharrow.functional.get_score_sum.rst", "generated/torcharrow.functional.has_id_overlap.rst", "generated/torcharrow.functional.id_overlap_count.rst", "generated/torcharrow.functional.scale_to_0_1.rst", "generated/torcharrow.functional.sigrid_hash.rst", "generated/torcharrow.if_else.rst", "generated/torcharrow.ilist_column.ListMethods.length.rst", "generated/torcharrow.ilist_column.ListMethods.slice.rst", "generated/torcharrow.ilist_column.ListMethods.vmap.rst", "generated/torcharrow.istring_column.StringMethods.contains.rst", "generated/torcharrow.istring_column.StringMethods.count.rst", "generated/torcharrow.istring_column.StringMethods.endswith.rst", "generated/torcharrow.istring_column.StringMethods.find.rst", "generated/torcharrow.istring_column.StringMethods.findall.rst", "generated/torcharrow.istring_column.StringMethods.isalnum.rst", "generated/torcharrow.istring_column.StringMethods.isalpha.rst", "generated/torcharrow.istring_column.StringMethods.isdecimal.rst", "generated/torcharrow.istring_column.StringMethods.isdigit.rst", "generated/torcharrow.istring_column.StringMethods.islower.rst", "generated/torcharrow.istring_column.StringMethods.isnumeric.rst", "generated/torcharrow.istring_column.StringMethods.isspace.rst", "generated/torcharrow.istring_column.StringMethods.istitle.rst", "generated/torcharrow.istring_column.StringMethods.isupper.rst", "generated/torcharrow.istring_column.StringMethods.length.rst", "generated/torcharrow.istring_column.StringMethods.lower.rst", "generated/torcharrow.istring_column.StringMethods.match.rst", "generated/torcharrow.istring_column.StringMethods.replace.rst", "generated/torcharrow.istring_column.StringMethods.slice.rst", "generated/torcharrow.istring_column.StringMethods.split.rst", "generated/torcharrow.istring_column.StringMethods.startswith.rst", "generated/torcharrow.istring_column.StringMethods.strip.rst", "generated/torcharrow.istring_column.StringMethods.upper.rst", "index.rst", "torcharrow.rst"], "titles": ["torcharrow.Column", "torcharrow.DataFrame", "torcharrow.dtypes", "torcharrow.functional", "torcharrow.Column.all", "torcharrow.Column.any", "torcharrow.Column.append", "torcharrow.Column.cast", "torcharrow.Column.drop_duplicates", "torcharrow.Column.drop_null", "torcharrow.Column.fill_null", "torcharrow.Column.filter", "torcharrow.Column.flatmap", "torcharrow.Column.head", "torcharrow.Column.is_valid_at", "torcharrow.Column.isin", "torcharrow.Column.map", "torcharrow.Column.tail", "torcharrow.Column.to_arrow", "torcharrow.Column.to_pandas", "torcharrow.Column.to_pylist", "torcharrow.Column.to_tensor", "torcharrow.Column.transform", "torcharrow.DataFrame.all", "torcharrow.DataFrame.any", "torcharrow.DataFrame.append", "torcharrow.DataFrame.describe", "torcharrow.DataFrame.drop", "torcharrow.DataFrame.drop_duplicates", "torcharrow.DataFrame.drop_null", "torcharrow.DataFrame.fill_null", "torcharrow.DataFrame.filter", "torcharrow.DataFrame.flatmap", "torcharrow.DataFrame.head", "torcharrow.DataFrame.isin", "torcharrow.DataFrame.log", "torcharrow.DataFrame.map", "torcharrow.DataFrame.max", "torcharrow.DataFrame.mean", "torcharrow.DataFrame.median", "torcharrow.DataFrame.min", "torcharrow.DataFrame.rename", "torcharrow.DataFrame.reorder", "torcharrow.DataFrame.select", "torcharrow.DataFrame.sort", "torcharrow.DataFrame.std", "torcharrow.DataFrame.sum", "torcharrow.DataFrame.tail", "torcharrow.DataFrame.to_arrow", "torcharrow.DataFrame.to_pandas", "torcharrow.DataFrame.to_pylist", "torcharrow.DataFrame.to_tensor", "torcharrow.DataFrame.transform", "torcharrow.DataFrame.where", "torcharrow.NumericalColumn.abs", "torcharrow.NumericalColumn.ceil", "torcharrow.NumericalColumn.describe", "torcharrow.NumericalColumn.floor", "torcharrow.NumericalColumn.log", "torcharrow.NumericalColumn.max", "torcharrow.NumericalColumn.mean", "torcharrow.NumericalColumn.median", "torcharrow.NumericalColumn.min", "torcharrow.NumericalColumn.round", "torcharrow.NumericalColumn.std", "torcharrow.NumericalColumn.sum", "torcharrow.column", "torcharrow.concat", "torcharrow.dataframe", "torcharrow.from_arrow", "torcharrow.functional.bucketize", "torcharrow.functional.firstx", "torcharrow.functional.get_cosine_similarity", "torcharrow.functional.get_jaccard_similarity", "torcharrow.functional.get_max_count", "torcharrow.functional.get_score_max", "torcharrow.functional.get_score_min", "torcharrow.functional.get_score_sum", "torcharrow.functional.has_id_overlap", "torcharrow.functional.id_overlap_count", "torcharrow.functional.scale_to_0_1", "torcharrow.functional.sigrid_hash", "torcharrow.if_else", "torcharrow.ilist_column.ListMethods.length", "torcharrow.ilist_column.ListMethods.slice", "torcharrow.ilist_column.ListMethods.vmap", "torcharrow.istring_column.StringMethods.contains", "torcharrow.istring_column.StringMethods.count", "torcharrow.istring_column.StringMethods.endswith", "torcharrow.istring_column.StringMethods.find", "torcharrow.istring_column.StringMethods.findall", "torcharrow.istring_column.StringMethods.isalnum", "torcharrow.istring_column.StringMethods.isalpha", "torcharrow.istring_column.StringMethods.isdecimal", "torcharrow.istring_column.StringMethods.isdigit", "torcharrow.istring_column.StringMethods.islower", "torcharrow.istring_column.StringMethods.isnumeric", "torcharrow.istring_column.StringMethods.isspace", "torcharrow.istring_column.StringMethods.istitle", "torcharrow.istring_column.StringMethods.isupper", "torcharrow.istring_column.StringMethods.length", "torcharrow.istring_column.StringMethods.lower", "torcharrow.istring_column.StringMethods.match", "torcharrow.istring_column.StringMethods.replace", "torcharrow.istring_column.StringMethods.slice", "torcharrow.istring_column.StringMethods.split", "torcharrow.istring_column.StringMethods.startswith", "torcharrow.istring_column.StringMethods.strip", "torcharrow.istring_column.StringMethods.upper", "TorchArrow Documentation", "torcharrow"], "terms": {"A": [0, 11, 31, 43, 53, 68, 92, 93, 96], "1": [0, 3, 6, 9, 10, 11, 13, 15, 16, 17, 21, 25, 29, 30, 31, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 56, 59, 60, 62, 65, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 85, 105], "dimens": 0, "torch": [0, 22, 52, 109], "tensor": [0, 21, 51, 109], "like": [0, 1, 15, 22, 34, 44, 52, 56, 66, 109], "data": [0, 14, 16, 36, 61, 63, 64, 66, 68, 69, 80, 109, 110], "structur": [0, 110], "contain": [0, 15, 20, 21, 34, 50, 51, 80, 93, 110], "element": [0, 4, 5, 15, 16, 23, 24, 34, 36, 54, 58, 71, 82, 83, 84, 88, 100, 104, 106], "singl": [0, 80], "type": [0, 1, 12, 15, 16, 21, 22, 32, 34, 36, 51, 52, 66, 68, 77], "It": [0, 109, 110], "also": [0, 1, 16, 36, 75, 76, 77, 109, 110], "support": [0, 16, 36, 66, 68, 84, 105, 109], "non": [0, 4, 5, 14, 16, 23, 24, 36, 37, 38, 40, 44, 46, 59, 60, 62, 65, 66, 95, 99], "numer": [0, 70, 81, 94, 96], "string": [0, 3, 6, 11, 16, 25, 31, 36, 43, 53, 66, 68, 82, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 101, 102, 105, 106, 107, 108], "list": [0, 3, 6, 8, 11, 12, 13, 15, 16, 17, 20, 21, 22, 25, 27, 28, 31, 32, 33, 34, 36, 42, 44, 47, 50, 51, 52, 56, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 85, 105], "struct": [0, 13, 15, 16, 17, 21, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 68, 85], "dtype": [0, 1, 3, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 21, 22, 25, 29, 30, 31, 32, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 52, 53, 56, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 85, 105, 109], "devic": [0, 1, 3, 66, 68, 69, 82, 109], "which": [0, 1, 11, 15, 16, 31, 34, 36, 56, 66, 68], "alloc": [0, 1, 66], "length": [0, 1, 3, 6, 9, 10, 11, 16, 25, 29, 30, 31, 36, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 85, 105], "return": [0, 1, 4, 5, 6, 9, 10, 13, 14, 15, 16, 17, 23, 24, 25, 27, 29, 30, 33, 34, 36, 37, 38, 40, 41, 42, 46, 47, 58, 59, 60, 61, 62, 64, 65, 67, 71, 72, 73, 75, 76, 77, 78, 79, 80, 82, 86, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 105], "number": [0, 1, 13, 17, 33, 47, 63, 71, 74, 79, 91, 105], "row": [0, 1, 8, 9, 10, 11, 12, 13, 16, 17, 22, 28, 29, 30, 31, 32, 33, 36, 47, 52, 53], "includ": [0, 1, 3, 26, 53, 56, 107], "null": [0, 1, 4, 5, 9, 10, 14, 16, 23, 24, 29, 30, 36, 37, 38, 40, 44, 46, 59, 60, 62, 65], "valu": [0, 1, 6, 8, 9, 10, 15, 16, 25, 28, 29, 30, 34, 36, 37, 38, 40, 43, 44, 46, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 65, 66, 68, 70, 71, 80, 81, 82], "null_count": [0, 3, 6, 9, 10, 11, 13, 15, 16, 17, 21, 25, 29, 30, 31, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 85, 105], "python": [1, 16, 20, 22, 36, 50, 52, 109], "librari": 1, "built": 1, "apach": 1, "arrow": [1, 18, 48, 69, 109, 110], "columnar": 1, "memori": [1, 66], "format": [1, 22, 52, 109, 110], "load": 1, "join": [1, 105], "aggreg": 1, "filter": [1, 16, 36, 53], "otherwis": [1, 78, 91, 92, 93, 94, 95, 96, 97, 98, 99], "manipul": 1, "provid": [1, 11, 16, 31, 36, 68, 110], "panda": [1, 11, 19, 31, 49, 53], "natur": [1, 58], "fit": 1, "ml": 1, "ecosystem": 1, "familiar": 1, "scientist": 1, "engin": 1, "so": 1, "thei": 1, "can": [1, 16, 21, 36, 43, 51, 53, 68, 109], "us": [1, 9, 10, 11, 16, 21, 29, 30, 31, 36, 43, 44, 51, 53, 56, 66, 68, 81, 110], "express": [1, 43, 53, 102, 105], "tabular": [1, 110], "workflow": 1, "featur": [1, 70, 109], "train": 1, "infer": [1, 66, 68], "preprocess": [1, 109], "column": [1, 3, 25, 27, 29, 30, 31, 32, 34, 36, 37, 38, 40, 41, 42, 43, 44, 46, 51, 52, 56, 58, 59, 60, 62, 65, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 87, 89, 100, 101, 103, 104, 105, 107, 108, 109], "The": [1, 21, 22, 43, 51, 52, 68, 73, 110], "label": 1, "under": 2, "construct": [2, 68], "ar": [3, 4, 6, 9, 16, 23, 25, 29, 36, 66, 68, 74, 91, 92, 93, 94, 96, 97, 109], "here": [3, 66], "an": [3, 11, 16, 31, 36, 53, 81, 92, 98, 109], "exampl": [3, 6, 9, 10, 11, 13, 15, 16, 17, 21, 25, 29, 30, 31, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 56, 59, 60, 62, 65, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 85, 105], "usag": 3, "lpad": 3, "import": [3, 6, 9, 10, 13, 15, 16, 17, 21, 25, 29, 30, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 56, 59, 60, 62, 65, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 85, 105], "ta": [3, 6, 9, 10, 11, 13, 15, 16, 17, 21, 25, 29, 30, 31, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 56, 59, 60, 62, 65, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 85, 105], "from": [3, 8, 11, 16, 21, 28, 31, 36, 43, 51, 53, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 84, 93, 104, 107], "col": [3, 71, 80, 85], "abc": 3, "x": [3, 11, 16, 31, 36, 71], "yz": 3, "s": [3, 9, 10, 29, 30, 43, 53, 59, 60, 62, 64, 65, 66, 105], "http": 3, "facebookincub": 3, "github": 3, "io": 3, "html": 3, "5": [3, 13, 15, 16, 17, 21, 33, 34, 36, 37, 38, 40, 44, 46, 47, 51, 56, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 85], "123": 3, "0": [3, 6, 9, 10, 11, 13, 15, 16, 17, 21, 25, 29, 30, 31, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 56, 60, 63, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 84, 85, 93, 105], "12abc": 3, "1231x": 3, "2": [3, 6, 9, 10, 11, 13, 16, 17, 21, 25, 29, 30, 31, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 56, 59, 60, 62, 65, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 85, 105], "123yz": 3, "nullabl": [3, 16, 36, 37, 38, 40, 46, 66, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 85], "true": [3, 4, 5, 11, 16, 23, 24, 31, 34, 36, 37, 38, 40, 44, 46, 66, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 85, 86, 91, 92, 93, 94, 95, 96, 97, 98, 99, 103], "3": [3, 6, 9, 10, 11, 16, 21, 25, 29, 30, 31, 34, 36, 38, 43, 51, 53, 56, 60, 66, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 82, 85], "cpu": [3, 66, 68, 82], "anoth": 3, "arrai": [3, 15, 18, 34, 44, 56, 66, 69, 110], "array_except": 3, "col1": 3, "col2": 3, "4": [3, 9, 10, 11, 16, 21, 29, 30, 31, 34, 36, 37, 40, 43, 46, 51, 53, 56, 59, 62, 65, 66, 68, 70, 72, 74, 75, 76, 77, 81, 82, 85], "6": [3, 13, 16, 17, 33, 34, 36, 37, 38, 40, 44, 46, 47, 56, 60, 68, 70, 81, 85], "int64": [3, 9, 10, 13, 15, 16, 17, 21, 29, 30, 33, 36, 37, 40, 43, 44, 46, 47, 51, 53, 66, 68, 71, 81, 85], "whether": [4, 5, 14, 15, 23, 24, 34], "datafram": [6, 13, 15, 16, 17, 21, 69, 109, 110], "paramet": [6, 9, 10, 11, 13, 15, 16, 17, 21, 25, 29, 30, 31, 33, 34, 36, 43, 44, 47, 51, 56, 66, 68, 70, 71, 72, 73, 74, 75, 76, 78, 79, 81, 84, 105], "sf": [6, 25, 66], "hello": [6, 25, 66], "world": [6, 25, 66, 105], "how": [6, 9, 25, 29, 66], "you": [6, 25, 66, 68], "dt": [6, 12, 16, 25, 32, 36, 66, 68, 85], "i": [6, 14, 25], "am": [6, 25], "fine": [6, 25], "given": [7, 53, 63, 105, 109], "subset": [8, 28], "ty": [8, 9, 12, 16, 28, 29, 32, 36, 44], "union": [8, 10, 11, 12, 15, 16, 28, 30, 31, 32, 34, 36, 66, 68, 69, 70, 73], "str": [8, 10, 11, 12, 16, 22, 27, 28, 30, 31, 32, 36, 41, 42, 44, 52, 66, 68, 69, 86, 87, 90, 101, 102, 103, 105, 108], "liter": [8, 9, 12, 16, 28, 29, 32, 36, 44, 105], "none": [8, 9, 10, 11, 12, 16, 21, 22, 26, 28, 29, 30, 31, 32, 36, 37, 38, 40, 44, 46, 51, 52, 56, 59, 60, 62, 65, 66, 68, 69, 84, 85, 104, 105], "keep": [8, 11, 28, 31, 43], "first": [8, 13, 17, 28, 33, 44, 47, 71, 72, 73, 74, 75, 76, 77, 78, 79], "last": [8, 13, 17, 28, 33, 44, 47], "fals": [8, 11, 28, 31, 34, 66, 82, 91, 92, 93, 94, 95, 96, 97, 98, 99], "experiment": [8, 14, 28, 42, 85], "api": [8, 14, 28, 42, 85], "remov": [8, 9, 10, 27, 28, 29, 30, 43, 107], "duplic": [8, 28], "frame": [8, 9, 10, 28, 29, 30], "ani": [9, 29, 68], "all": [9, 11, 29, 31, 43, 44, 75, 76, 77, 90, 91, 92, 93, 94, 96, 97, 105], "where": [9, 10, 11, 16, 29, 30, 31, 36, 66, 68, 82], "ha": [9, 29, 68, 71, 75, 76, 77], "default": [9, 11, 16, 21, 22, 29, 31, 36, 44, 51, 52, 56, 63, 66, 68, 84, 105], "If": [9, 11, 16, 22, 29, 31, 36, 44, 52, 56, 63, 66, 68, 74, 80], "drop": [9, 29], "icolumn": [9, 10, 13, 17, 29, 30, 33, 47], "fill_nul": [9, 29], "fill": [9, 10, 29, 30], "na": [9, 29], "nan": [9, 29], "specifi": [9, 10, 16, 29, 30, 36, 63], "method": [9, 10, 16, 21, 29, 30, 36, 51], "fill_valu": [10, 30], "int": [10, 13, 16, 17, 30, 33, 36, 47, 63, 70, 71, 81, 84, 104, 105], "float": [10, 30, 70], "bool": [10, 30, 44, 86, 103], "dict": [10, 12, 15, 16, 21, 30, 32, 34, 36, 41, 51, 68], "drop_nul": [10, 30], "999": [10, 30, 56], "predic": [11, 31], "callabl": [11, 12, 16, 22, 31, 32, 36, 52, 85], "iter": [11, 31, 66, 68], "option": [11, 12, 16, 22, 31, 32, 36, 44, 52, 56, 66, 68, 69, 84, 104], "select": [11, 16, 31, 36, 66, 68, 82], "differ": [11, 16, 31, 36], "function": [11, 16, 31, 36, 109], "boolean": [11, 15, 31, 34, 86], "same": [11, 31], "n": [11, 13, 16, 17, 31, 33, 36, 47, 105], "ari": [11, 31], "argument": [11, 31, 43], "name": [11, 16, 21, 31, 36, 41, 43, 51, 68], "invok": [11, 16, 22, 31, 36, 52], "appli": [11, 31, 70, 81], "map": [11, 12, 21, 22, 31, 32, 51, 52, 66, 85], "reduc": [11, 31], "flatmap": [11, 16, 31, 36], "lambda": [11, 16, 31, 36, 85], "arg": [12, 16, 32, 36, 43], "na_act": [12, 16, 32, 36], "ignor": [12, 16, 32, 36], "accord": [12, 16, 32, 36, 105], "input": [12, 16, 22, 32, 36, 52, 70, 71, 78, 81], "correspond": [12, 16, 32, 36, 75, 76, 77, 82], "requir": [12, 16, 22, 32, 36, 52], "result": [12, 16, 22, 32, 36, 52], "item": [12, 16, 22, 32, 36, 52, 74, 86, 90], "tail": [13, 33], "df": [13, 15, 17, 21, 33, 34, 37, 38, 40, 44, 46, 47, 51, 53, 68, 85], "rang": [13, 15, 17, 33, 44, 47, 68, 80, 81], "7": [13, 15, 17, 33, 38, 44, 46, 47, 56, 65, 68, 70, 81], "b": [13, 15, 16, 17, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 53, 68, 85], "revers": [13, 15, 17, 33, 44, 47, 68], "c": [13, 15, 16, 17, 33, 36, 43, 44, 47, 53, 68, 85], "index": [13, 14, 15, 16, 17, 21, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 56, 68, 81, 109], "d": [13, 15, 17, 33, 43, 44, 47, 68], "99": [13, 33, 44, 68], "100": [13, 33, 44, 68, 81], "field": [13, 15, 16, 17, 21, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 68, 85], "count": [13, 15, 16, 17, 21, 33, 34, 36, 37, 38, 40, 43, 44, 46, 47, 51, 53, 56, 68, 74], "valid": [14, 66, 68, 81], "e": 14, "check": [15, 34], "each": [15, 16, 34, 36, 37, 38, 40, 46, 54, 55, 57, 63, 82, 83, 84, 86, 87, 88, 89, 90, 96, 98, 100, 102, 103, 104, 106, 107], "presenc": [15, 34], "indic": [15, 89], "104": [15, 68], "thi": [16, 36, 43, 68, 70, 81, 109], "becom": [16, 36], "treat": [16, 36], "user": [16, 36, 109], "defin": [16, 36, 56, 66, 68, 70, 72, 81, 110], "udf": [16, 36], "must": [16, 36], "global": [16, 36], "class": [16, 36, 109], "instanc": [16, 36, 74], "your": [16, 36], "effici": [16, 36], "improv": [16, 36, 109], "avoid": [16, 36], "call": [16, 36], "awai": [16, 36], "forc": [16, 36, 66, 68], "output": [16, 36], "determin": [16, 36, 102], "111": [16, 36, 68], "defaultdict": [16, 36], "miss": [16, 22, 36, 52], "collect": [16, 36], "suppli": [16, 36, 66, 68], "def": [16, 36], "add_ten": [16, 36], "num": [16, 36], "10": [16, 36, 38, 43, 53, 70, 81], "11": [16, 36, 43, 53, 66, 68, 70, 81], "12": [16, 36, 43, 53], "14": [16, 36], "note": [16, 36], "abov": [16, 36], "would": [16, 36], "fail": [16, 36], "error": [16, 36], "sinc": [16, 36], "addten": [16, 36], "To": [16, 36], "pass": [16, 22, 36, 52], "need": [16, 36, 109], "prepar": [16, 36], "add_ten_or_0": [16, 36], "els": [16, 36, 44], "over": [16, 36, 110], "get": [16, 36], "whole": [16, 36], "tupl": [16, 36, 68], "add_unari": [16, 36], "tup": [16, 36], "multi": [16, 36], "add_binari": [16, 36], "more": [16, 36], "than": [16, 36], "one": [16, 36, 66, 92, 93, 109], "known": [16, 36], "mandatori": [16, 36], "17": [16, 36, 43], "29": [16, 36], "30": [16, 36], "divmod": [16, 36], "quotient": [16, 36], "remaind": [16, 36], "8": [16, 36, 37, 40, 46, 66, 70, 71, 73, 74, 78, 79, 81], "state": [16, 36], "written": [16, 36], "captur": [16, 36], "deleg": [16, 36], "fib": [16, 36], "elif": [16, 36], "dataclass": [16, 36], "__post_init__": [16, 36], "self": [16, 18, 19, 36, 43, 48, 49, 53], "add_fib": [16, 36], "m": [16, 36], "56": [16, 36], "57": [16, 36], "58": [16, 36], "head": [17, 44, 47, 71], "105": [17, 47, 68], "convert": [18, 19, 20, 21, 22, 48, 49, 50, 51, 52, 69, 70, 101, 108], "seri": [19, 54], "plain": [20, 50], "scalar": [20, 50], "convers": [21, 51, 109], "pytorch": [21, 22, 51, 52], "packedlist": [21, 51], "packedmap": [21, 51], "etc": [21, 51], "tensorconvers": [21, 51], "onli": [21, 51, 53, 80, 93], "For": [21, 51, 109], "tap": [21, 51], "label_id": [21, 51], "token_id": [21, 51], "101": [21, 51, 68], "102": [21, 51, 68], "padsequ": [21, 51], "padding_valu": [21, 51], "torcharrowstruct_0": [21, 51], "func": [22, 52], "mini": [22, 52], "batch": [22, 52, 85], "time": [22, 52, 109], "instead": [22, 52], "hint": [22, 52], "percentil": [26, 56], "exclud": [26, 56], "without": [27, 68], "show": 34, "maxim": 37, "float32": [38, 72, 73, 74, 75, 76, 77, 78, 79], "minimum": [40, 62], "mapper": 41, "remap": 41, "prescrib": 42, "order": [42, 44, 68, 81], "kwarg": 43, "analog": [43, 53], "sql": [43, 53], "transform": 43, "old": 43, "new": [43, 58, 68], "comput": [43, 83, 100], "special": [43, 53], "symbol": 43, "me": [43, 53], "refer": [43, 53], "posit": [43, 63, 82, 84], "project": [43, 109], "shortcut": 43, "denot": [43, 110], "begin": [43, 106], "mean": [43, 56, 105], "add": [43, 68], "xf": [43, 53], "13": [43, 53, 71, 73, 74, 78, 79], "15": 43, "colnam": 43, "ascend": 44, "na_posit": 44, "descend": 44, "comparison": 44, "after": 44, "befor": 44, "19": 46, "tabl": [48, 69, 81], "condit": 53, "NOT": 53, "satisfi": 53, "set": [53, 68], "p": 53, "equival": [53, 101, 108], "write": 53, "when": [53, 68, 105], "absolut": 54, "round": [55, 57], "upward": 55, "smallest": 55, "integr": [55, 57], "gener": [56, 109], "descript": 56, "statist": [56, 109], "calcul": 56, "25": [56, 66, 81], "50": 56, "75": [56, 73], "t": [56, 68], "251": 56, "std": 56, "498": 56, "335": 56, "min": [56, 66, 75, 76], "501": 56, "max": [56, 66, 74], "downward": 57, "largest": 57, "logarithm": 58, "maximum": [59, 74, 105], "decim": [63, 93], "place": 63, "neg": [63, 84], "left": [63, 68, 82, 107], "point": 63, "stddev": 64, "creat": [66, 68], "content": [66, 68], "automat": [66, 68], "possibl": [66, 68], "runtim": [66, 68, 109], "scope": [66, 68], "multipl": [66, 68, 109], "gpu": [66, 68], "velox": [66, 68, 109], "vector": [66, 68, 72, 85], "come": [66, 68], "soon": [66, 68], "auto": 66, "arbitrarili": 66, "arbitrari": 66, "item_dtyp": 66, "fixed_s": 66, "averag": 66, "climat": 66, "per": 66, "contin": 66, "citi": 66, "kei": [66, 68], "yearli": 66, "temperatur": 66, "mf": 66, "helsinki": 66, "21": 66, "moscow": 66, "24": 66, "algier": 66, "kinshasa": 66, "22": [66, 68], "26": 66, "float64": 66, "concaten": 67, "particular": 68, "should": [68, 109], "custom": 68, "both": 68, "semant": 68, "empti": [68, 95, 99], "just": 68, "strongli": 68, "equal": 68, "immut": 68, "except": [68, 109], "alwai": 68, "its": 68, "hasn": 68, "been": 68, "append": 68, "exist": 68, "end": [68, 88], "103": 68, "build": 68, "nest": 68, "df_inner": 68, "b1": [68, 82], "33": 68, "b2": [68, 82], "222": 68, "333": 68, "df_outer": 68, "l": 68, "t1": 68, "t2": 68, "value_col": [70, 81], "numericalcolumn": [70, 80, 81, 109], "border": 70, "listcolumn": [70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 84, 109], "common": [70, 81, 109], "oper": [70, 81, 84, 109, 110], "recommend": [70, 81, 109], "domain": [70, 81], "dens": 70, "spars": 70, "discret": 70, "int32": 70, "num_to_copi": 71, "input_id": [72, 73, 74, 75, 76, 77, 78, 79], "input_id_scor": [72, 77], "matching_id": [72, 73, 74, 75, 76, 77, 78, 79], "matching_id_scor": [72, 75, 76, 77], "cosin": 72, "between": [72, 73, 74, 79], "weight": [72, 75, 76, 77], "id": [72, 73, 74, 75, 76, 77, 78, 79], "input_ids_scor": [72, 77], "score": [72, 75, 76, 77], "second": [72, 73, 74, 75, 76, 77, 78, 79], "matching_ids_scor": [72, 75, 76, 77], "831522": 72, "jaccard_similar": 73, "jaccard": 73, "similar": 73, "intersect": 73, "overlap": [74, 78, 79], "contribut": 74, "among": [75, 76], "get_score_min": 75, "sum": 77, "param": 77, "9": [77, 93], "two": [78, 79, 110], "scale": 80, "sigmoid": 80, "salt": 81, "max_valu": 81, "hash": 81, "indici": 81, "have": 81, "shrunken": 81, "embed": 81, "intial": 81, "random": 81, "process": 81, "60": 81, "54": 81, "67": 81, "cond": 82, "right": [82, 107], "them": 82, "either": [82, 91], "righ": 82, "depend": 82, "a1": 82, "a2": 82, "a3": 82, "a4": 82, "b3": 82, "b4": 82, "start": [84, 98, 104], "stop": [84, 104], "sublist": 84, "yet": [84, 105, 109], "fun": 85, "expect": [85, 109], "work": 85, "repres": 85, "f1": 85, "f2": 85, "abstract": [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], "pat": [86, 87, 88, 90, 102, 103, 105, 106], "regex": [86, 103], "test": [86, 88, 106, 109], "pattern": [86, 87, 88, 90, 103, 106], "within": 86, "occurr": [87, 90, 103], "match": [88, 106], "sub": 89, "lowest": 89, "find": 90, "see": [90, 109], "re": 90, "charact": [91, 92, 93, 94, 96, 97], "alphanumer": 91, "alphabet": [91, 92], "least": [92, 93], "digit": 93, "lower": 95, "case": [95, 98, 99], "whitespac": [97, 105, 107], "word": 98, "upper": [98, 99], "letter": 98, "stringcolumn": [101, 104, 108, 109], "lowercas": 101, "regular": [102, 105], "repl": 103, "substr": 104, "around": 105, "separ": 105, "delimit": 105, "doe": 105, "do": 105, "interpret": 105, "limit": [105, 109], "what": 105, "wonder": 105, "realli": 105, "lead": 107, "trail": 107, "newlin": 107, "side": 107, "uppercas": 108, "part": 109, "open": 109, "sourc": 109, "deep": 109, "learn": 109, "framework": 109, "execut": 109, "describ": 109, "classifi": 109, "releas": 109, "statu": 109, "stabl": 109, "These": 109, "maintain": 109, "long": 109, "term": 109, "major": 109, "perform": 109, "gap": 109, "we": 109, "backward": 109, "compat": 109, "although": 109, "break": 109, "chang": 109, "happen": 109, "notic": 109, "ahead": 109, "beta": 109, "tag": 109, "becaus": 109, "mai": 109, "base": 109, "feedback": 109, "coverag": 109, "across": 109, "complet": 109, "commit": 109, "through": 109, "classif": 109, "howev": 109, "prototyp": 109, "typic": 109, "avail": 109, "binari": 109, "distribut": 109, "pypi": 109, "conda": 109, "sometim": 109, "behind": 109, "run": 109, "flag": 109, "earli": 109, "stage": 109, "creation": 109, "op": 109, "mutat": 109, "relat": [109, 110], "clean": 109, "arithmt": 109, "core": 109, "high": 109, "level": 109, "torchaudio": 109, "torchtext": 109, "torchvis": 109, "torchdata": 109, "torchelast": 109, "torchserv": 109, "xla": 109, "packag": 110, "dimension": 110, "potenti": 110, "heterogen": 110, "addition": 110, "util": 110, "other": 110, "especi": 110, "zero": 110, "copi": 110}, "objects": {"torcharrow": [[0, 0, 1, "", "Column"], [1, 0, 1, "", "DataFrame"], [0, 0, 1, "", "ListColumn"], [0, 0, 1, "", "NumericalColumn"], [0, 0, 1, "", "StringColumn"], [66, 3, 1, "", "column"], [67, 3, 1, "", "concat"], [68, 3, 1, "", "dataframe"], [69, 3, 1, "", "from_arrow"], [82, 3, 1, "", "if_else"]], "torcharrow.Column": [[4, 1, 1, "", "all"], [5, 1, 1, "", "any"], [6, 1, 1, "", "append"], [7, 1, 1, "", "cast"], [0, 2, 1, "", "device"], [8, 1, 1, "", "drop_duplicates"], [9, 1, 1, "", "drop_null"], [0, 2, 1, "", "dtype"], [10, 1, 1, "", "fill_null"], [11, 1, 1, "", "filter"], [12, 1, 1, "", "flatmap"], [13, 1, 1, "", "head"], [14, 1, 1, "", "is_valid_at"], [15, 1, 1, "", "isin"], [0, 2, 1, "", "length"], [16, 1, 1, "", "map"], [0, 2, 1, "", "null_count"], [17, 1, 1, "", "tail"], [18, 1, 1, "", "to_arrow"], [19, 1, 1, "", "to_pandas"], [20, 1, 1, "", "to_pylist"], [21, 1, 1, "", "to_tensor"], [22, 1, 1, "", "transform"]], "torcharrow.DataFrame": [[23, 1, 1, "", "all"], [24, 1, 1, "", "any"], [25, 1, 1, "", "append"], [1, 2, 1, "", "columns"], [26, 1, 1, "", "describe"], [1, 2, 1, "", "device"], [27, 1, 1, "", "drop"], [28, 1, 1, "", "drop_duplicates"], [29, 1, 1, "", "drop_null"], [1, 2, 1, "", "dtype"], [30, 1, 1, "", "fill_null"], [31, 1, 1, "", "filter"], [32, 1, 1, "", "flatmap"], [33, 1, 1, "", "head"], [34, 1, 1, "", "isin"], [1, 2, 1, "", "length"], [35, 1, 1, "", "log"], [36, 1, 1, "", "map"], [37, 1, 1, "", "max"], [38, 1, 1, "", "mean"], [39, 1, 1, "", "median"], [40, 1, 1, "", "min"], [41, 1, 1, "", "rename"], [42, 1, 1, "", "reorder"], [43, 1, 1, "", "select"], [44, 1, 1, "", "sort"], [45, 1, 1, "", "std"], [46, 1, 1, "", "sum"], [47, 1, 1, "", "tail"], [48, 1, 1, "", "to_arrow"], [49, 1, 1, "", "to_pandas"], [50, 1, 1, "", "to_pylist"], [51, 1, 1, "", "to_tensor"], [52, 1, 1, "", "transform"], [53, 1, 1, "", "where"]], "torcharrow.NumericalColumn": [[54, 1, 1, "", "abs"], [55, 1, 1, "", "ceil"], [56, 1, 1, "", "describe"], [57, 1, 1, "", "floor"], [58, 1, 1, "", "log"], [59, 1, 1, "", "max"], [60, 1, 1, "", "mean"], [61, 1, 1, "", "median"], [62, 1, 1, "", "min"], [63, 1, 1, "", "round"], [64, 1, 1, "", "std"], [65, 1, 1, "", "sum"]], "torcharrow.functional": [[70, 3, 1, "", "bucketize"], [71, 3, 1, "", "firstx"], [72, 3, 1, "", "get_cosine_similarity"], [73, 3, 1, "", "get_jaccard_similarity"], [74, 3, 1, "", "get_max_count"], [75, 3, 1, "", "get_score_max"], [76, 3, 1, "", "get_score_min"], [77, 3, 1, "", "get_score_sum"], [78, 3, 1, "", "has_id_overlap"], [79, 3, 1, "", "id_overlap_count"], [80, 3, 1, "", "scale_to_0_1"], [81, 3, 1, "", "sigrid_hash"]], "torcharrow.ilist_column.ListMethods": [[83, 1, 1, "", "length"], [84, 1, 1, "", "slice"], [85, 1, 1, "", "vmap"]], "torcharrow.istring_column.StringMethods": [[86, 1, 1, "", "contains"], [87, 1, 1, "", "count"], [88, 1, 1, "", "endswith"], [89, 1, 1, "", "find"], [90, 1, 1, "", "findall"], [91, 1, 1, "", "isalnum"], [92, 1, 1, "", "isalpha"], [93, 1, 1, "", "isdecimal"], [94, 1, 1, "", "isdigit"], [95, 1, 1, "", "islower"], [96, 1, 1, "", "isnumeric"], [97, 1, 1, "", "isspace"], [98, 1, 1, "", "istitle"], [99, 1, 1, "", "isupper"], [100, 1, 1, "", "length"], [101, 1, 1, "", "lower"], [102, 1, 1, "", "match"], [103, 1, 1, "", "replace"], [104, 1, 1, "", "slice"], [105, 1, 1, "", "split"], [106, 1, 1, "", "startswith"], [107, 1, 1, "", "strip"], [108, 1, 1, "", "upper"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:attribute", "3": "py:function"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "attribute", "Python attribute"], "3": ["py", "function", "Python function"]}, "titleterms": {"torcharrow": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110], "column": [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 66], "class": [0, 1], "refer": [0, 109], "numericalcolumn": [0, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65], "stringcolumn": 0, "listcolumn": 0, "datafram": [1, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 68], "gener": 1, "api": [1, 109], "function": [1, 3, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81], "relat": 1, "data": 1, "clean": 1, "convers": [1, 110], "statist": 1, "arithmt": 1, "oper": [1, 3], "dtype": 2, "velox": 3, "core": 3, "recommend": 3, "high": 3, "level": 3, "all": [4, 23], "ani": [5, 24], "append": [6, 25], "cast": 7, "drop_dupl": [8, 28], "drop_nul": [9, 29], "fill_nul": [10, 30], "filter": [11, 31], "flatmap": [12, 32], "head": [13, 33], "is_valid_at": 14, "isin": [15, 34], "map": [16, 36], "tail": [17, 47], "to_arrow": [18, 48], "to_panda": [19, 49], "to_pylist": [20, 50], "to_tensor": [21, 51], "transform": [22, 52], "describ": [26, 56], "drop": 27, "log": [35, 58], "max": [37, 59], "mean": [38, 60], "median": [39, 61], "min": [40, 62], "renam": 41, "reorder": 42, "select": 43, "sort": 44, "std": [45, 64], "sum": [46, 65], "where": 53, "ab": 54, "ceil": 55, "floor": 57, "round": 63, "concat": 67, "from_arrow": 69, "bucket": 70, "firstx": 71, "get_cosine_similar": 72, "get_jaccard_similar": 73, "get_max_count": 74, "get_score_max": 75, "get_score_min": 76, "get_score_sum": 77, "has_id_overlap": 78, "id_overlap_count": 79, "scale_to_0_1": 80, "sigrid_hash": 81, "if_els": 82, "ilist_column": [83, 84, 85], "listmethod": [83, 84, 85], "length": [83, 100], "slice": [84, 104], "vmap": 85, "istring_column": [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], "stringmethod": [86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], "contain": 86, "count": 87, "endswith": 88, "find": 89, "findal": 90, "isalnum": 91, "isalpha": 92, "isdecim": 93, "isdigit": 94, "islow": 95, "isnumer": 96, "isspac": 97, "istitl": 98, "isupp": 99, "lower": 101, "match": 102, "replac": 103, "split": 105, "startswith": 106, "strip": 107, "upper": 108, "document": 109, "pytorch": 109, "librari": 109, "indic": 109, "creation": 110, "op": 110, "mutat": 110}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})
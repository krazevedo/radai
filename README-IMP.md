# Swagger Documentation Review and Suggestions

## Current Issues Identified

### Search Functionality

- **Search by Name**: Currently, there is no indication that the `name` parameter is mandatory. This can lead to confusion for users who might skip entering a name assuming it's optional.
- **Search by Street**: Similar to the name search, there is no clear indication that the `street` parameter is required. Providing clearer instructions or validation messages can improve user experience.

- **Search by Nearest**: This search returns only 5 results.

### Performance Improvement

- **Contains Search**: The current implementation starts searching by the first character typed. However, using `contains` for matching can significantly slow down the search process, especially with large datasets. Consider optimizing this feature for better performance or starts searching after 3 character typed.

## Proposed Enhancements

### Documentation Clarifications

- Update the descriptions for `Search by Name`, `Search by Street` to explicitly the mandatory parameters.
- Update the descriptions for `Search by Nearest` to explicitly the limit on the number of results returned.

### Performance Optimization

- Investigate and implement a more efficient search algorithm for the `contains` operation to improve search speed across the entire dataset.

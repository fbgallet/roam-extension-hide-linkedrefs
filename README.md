### Snippet allowing to hide/display linked references on demand (with hotkeys) in Roam Research.

1. Copy it in a Javascript codeblock, as a children of a `{{[[roam/js]]}}` block.
2. Run the code.
3. Refresh your graph.
4. By default, linked references are hidden. Run 'Hide/Display linked references section" or press hotkeys (`Control + Shift + L` by default) to display them. You can customize hotkeys in command palette.

Limitation of the `main` branch version: if you scroll more that 4 DNP on daily log, linked refs will no more be hidden. You have to press the hotkeys twice.

`stylesheet-rule` branch is a version that adds a CSS rule to the stylesheet. The references are instantly hidden (while it takes a fraction of a second in the main version) and works continuously in the daily log. But adding a CSS rule this way is not a very good practice.

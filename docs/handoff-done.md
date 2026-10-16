# Handoff "done" format (every build or design bot)

A handoff that says a demo change is done must use this shape. Master Chief treats anything missing a required line as not done and sends it back without bothering David.

```
DONE: <task id, e.g. FM-STADIUM-MENU-1>
Demo(s): <folder names>
PR: <link to the pull request>
Check: <link to the "Demo checks" run on that PR>, result PASS
Screenshots: <link to the run's "screenshots" artifact>
  desktop: <demo>__index__desktop.png   phone: <demo>__index__phone.png
What changed (plain English, 1-3 lines):
What David should look at, if anything:
Known gaps / warnings from the check:
```

Rules
- No PR link, no PASS, or no screenshots means not done.
- A check failure is fixed before handoff, not explained in it.
- One done-file per task. Follow-ups append to the same file instead of creating a new one.

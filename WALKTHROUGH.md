# Predict, change, reconcile

These tasks use invented approvals and entered time assumptions. Write a prediction before making each change. The answers are developer-authored; this document does not claim a novice has completed the tasks.

## 1. Shorter routing, same bottleneck

Start with the original 70/30 example. Predict what changes when only 10% of requests visit Procurement instead of 30%. Will Finance stop being overloaded? Load the 90/10 routing example, or open Process and editor, choose a route from Manager approval, enter Procurement 10 and Finance 90, then Apply outgoing shares.

Answer: nominal time drops from 471.5 to 370.5 minutes/request, a 101-minute reduction. Procurement work drops from 300 to 100 productive minutes/day. Every request still reaches Finance, so its work stays 40 × 12 = 480 min/day against 420 capacity (114.3%). Sustained overload grows backlog; the nominal sum does not establish sustainable turnaround. Risk classification and control effectiveness are assumed, not modeled by a share change.

While editing only the first share, results retain the previously applied group and clearly say the edits are pending. Change both before Apply. To inspect validation, apply a total of 90%; it names Manager approval and pauses results. Correct the group to 100% or restore the last valid process. Shares are never silently normalized.

## 2. Productive capacity and a relief extension

Explain the capacity unit before changing it. For example, 2 staff × 7 available hours/day × 60 min/hour × 50% productive share for these approvals = 420 productive min/day. Paid hours are not automatically productive approval capacity; breaks and other duties affect those assumptions.

Optional extension experiment: from the original routing, find an arrival rate that fits every entered team capacity without hiring. Predict whether nominal time changes. Then compare an increase in Finance capacity to 500 at the original 40 requests/day.

Answer: 35 requests/day puts Finance exactly at 420 min/day and 100%, with no spare capacity; 34 gives 408 min/day and 97.1%. Other teams also fit. Nominal time stays 471.5 because arrival volume does not change the entered per-visit assumptions. At 40 arrivals and Finance capacity 500, Finance load becomes 96%; nominal time again stays unchanged. These are workload checks. None establishes actual waiting time, a reliable service level or queue stability under variation. A stochastic queueing model is a separate objective, not part of this extension.

## 3. Complete graph-edit and recovery task

Use the native forms for this sequence; the wide-screen canvas is an alternative. On a narrow screen, use Steps and routes and the same forms.

1. Load the original example and open Process and editor. Add a review step. Rename it Extra review; keep Managers, 10 minutes touch and zero wait. The disconnected-step error should name Extra review.
2. Choose the Manager approval → Finance approval route. Change its To field to Extra review. Select Extra review as the Review step, then Add route from selected step. The new route initially leads to Approved; change its To field to Finance approval. Its outgoing share is 100%.
3. Choose either Manager approval outgoing route. Edit both shares together: Procurement review 10%, Extra review 90%. Before Apply, previously applied shares remain in force; after Apply the graph is valid.
4. Open Capacity and set Managers to 680 productive min/day. Predict the new nominal time and Managers work, then check the answer below.
5. Return to the editor, choose Extra review → Finance approval and change its To field to Manager approval. The loop error names blocked steps including Manager approval and Extra review. Undo last structural edit restores the whole pre-reconnect draft. This is one snapshot, not a history; later value edits would also be rolled back to that snapshot.
6. Export valid process. Load the original example, then Import JSON and choose the exported file. Confirm 379.5 nominal minutes/request, 680 Managers work/day and its capacity, the added step and routes. Import retains the existing baseline; Capture baseline explicitly replaces it. Export excludes the separate baseline and undo state.
7. On a wide canvas, pan the selected step out of view. Choose it in Review step, then Reveal selected step. It should fit that same selected step into the viewport. On a narrow page the selected list item and forms supply the equivalent editor.

Answer: Extra review receives 90% of 40 = 36 requests/day. It adds 9 expected touch minutes to the 90/10 route, so nominal time is 379.5. Managers work is (8 + 0.9 × 10) × 40 = 680 min/day, exactly 100% of the revised capacity. Finance still requires 480 against 420. A complete round trip must preserve numeric settings and graph positions; the baseline remains separate.

Before capturing a baseline, read the old name/time and changed-step/route/team counts. Capture includes all valid values and positions. Loading either teaching example replaces the draft and restores the original baseline, so export first. Refresh clears all in-memory edits.

## Human checks still required

A novice should attempt task 3 without coaching; record the prediction, errors encountered, recovery and final explanation. A screen-reader user should reach results, change the route group, hear pending and invalid states, recover, and export using the forms; name the reader/browser and observed announcements. Agent model checks, keyboard actions and DOM inspection do not prove novice or screen-reader usability. These human checks remain open until actually observed.

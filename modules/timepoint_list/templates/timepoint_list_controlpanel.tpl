
{if $isDataEntryPerson}
<button class="btn btn-primary" onclick="location.href='main.php?test_name=create_timepoint&candID={$candID}&identifier={$candID}'">Create time point</button>
{else}
Create time point
{/if}
{if $isDataEntryPerson}
<button class="btn btn-primary" onclick="location.href='main.php?test_name=candidate_parameters&candID={$candID}&identifier={$candID}'">Edit Candidate Info</button>
{else}
Edit Candidate Info
{/if}
{if $isDataEntryPerson}
<button class="btn btn-primary" onclick="location.href='main.php?test_name=participant_status&candID={$candID}&identifier={$candID}'">Participant Status</button>
{else}
Edit Candidate Info
{/if}

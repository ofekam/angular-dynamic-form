# angular-dynamic-form
Project written in angular v4.0.0 with dynamic form and dynamic questions, and has map object to iterable pipe.
The usage will be:
- add DynamicFormModule to your imports array
- use the tags dynamic-form or dynamic-question

#### dynamic-form:
Recives an array of type Question wich included in the directory, [questions]="".
Can get a list of classes as a string for example : "class-a class-b class-c",[formClasses]="".

#### dynamic-question:
Recives an object of type Question wich included in the directory,[questions]="". In the Question.ts file I included the basic types
like Input,Dropdown,File. I used [Angular cookbook](https://angular.io/docs/ts/latest/cookbook/dynamic-form.html "Angular.io Dynamic-Form cookbook")
for the start.
I added to each question the options of:
1. validation array- each object in this array is typeof ValidatorFn
2. condition - an object of type condition(included in directory) wich will determine if the question should be displayed or not.
3. tooltipText -a string wich will be shown while hovering on the question label - can get classes.

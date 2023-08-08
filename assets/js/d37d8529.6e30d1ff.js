"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3303],{9705:function(e,a,n){n.d(a,{m:function(){return o},v:function(){return i}});var t=n(7294),l=n(2004);function i(e){var a=e.children;return t.createElement("div",{className:"runnable-command"},a)}function o(e){var a=e.url;return t.createElement(l.Z,{playing:!0,loop:!0,muted:!0,controls:!0,width:"100%",height:"",url:a})}},3566:function(e,a,n){n.r(a),n.d(a,{assets:function(){return m},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return d}});var t=n(3117),l=n(102),i=(n(7294),n(3905)),o=n(9705),s=["components"],r={title:"Compile",sidebar_position:5},p=void 0,c={unversionedId:"commands/compile",id:"commands/compile",title:"Compile",description:"Scala CLI compiles your code with its compile command:",source:"@site/docs/commands/compile.md",sourceDirName:"commands",slug:"/commands/compile",permalink:"/docs/commands/compile",draft:!1,editUrl:"https://github.com/Virtuslab/scala-cli/edit/main/website/docs/commands/compile.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Compile",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/docs/commands/basics"},next:{title:"Run",permalink:"/docs/commands/run"}},m={},d=[{value:"Test scope",id:"test-scope",level:2},{value:"Watch mode",id:"watch-mode",level:2},{value:"Scala version",id:"scala-version",level:2},{value:"Scala Nightlies",id:"scala-nightlies",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Scala compiler options",id:"scala-compiler-options",level:2},{value:"Passing compiler options with <code>-O</code>",id:"passing-compiler-options-with--o",level:3},{value:"Passing compiler options with <code>using</code> directives",id:"passing-compiler-options-with-using-directives",level:3},{value:"Compiler options recognised even when passed without <code>-O</code>",id:"compiler-options-recognised-even-when-passed-without--o",level:3},{value:"Compiler options redirected to Scala CLI alternatives",id:"compiler-options-redirected-to-scala-cli-alternatives",level:3},{value:"Scala compiler help",id:"scala-compiler-help",level:3},{value:"Scala compiler plugins",id:"scala-compiler-plugins",level:2},{value:"Printing a class path",id:"printing-a-class-path",level:2},{value:"JVM options",id:"jvm-options",level:3},{value:"Exclude sources",id:"exclude-sources",level:2},{value:"Compile-Only Dependencies",id:"compile-only-dependencies",level:2}],u={toc:d};function h(e){var a=e.components,n=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Scala CLI compiles your code with its ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Hello.scala",title:"Hello.scala"},'object Hello {\n  def main(args: Array[String]): Unit =\n    println("Hello")\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala\n")),(0,i.kt)("p",null,"Note that most Scala CLI commands automatically compile your code, if necessary.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," command is useful if you want to check that your code compiles\n(or to see the compilation warnings, if any occur) without running it or packaging it."),(0,i.kt)("p",null,"The most common ",(0,i.kt)("inlineCode",{parentName:"p"},"compile")," options are shown below.\nFor a full list of options, run ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli compile --help"),", or check the options linked in the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/commands#compile"},"reference documentation"),"."),(0,i.kt)("h2",{id:"test-scope"},"Test scope"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--test")," makes Scala CLI compile main and test scopes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=Sample.test.scala",title:"Sample.test.scala"},'//> using dep org.scalameta::munit:0.7.29\nclass Test extends munit.FunSuite {\n  test("sample") {\n    assert(2 + 2 == 4)\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile --test Sample.test.scala\n")),(0,i.kt)("h2",{id:"watch-mode"},"Watch mode"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--watch")," makes Scala CLI watch your code for changes, and re-compiles it upon any change:"),(0,i.kt)(o.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli compile --watch Hello.scala\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Compiling project-cef76d561e (1 Scala source)\nCompiled 'project-cef76d561e'\nWatching sources, press Ctrl+C to exit.\nCompiling project-cef76d561e (1 Scala source)\nCompiled 'project-cef76d561e'\nWatching sources, press Ctrl+C to exit.\n"))),(0,i.kt)("h2",{id:"scala-version"},"Scala version"),(0,i.kt)("p",null,"Scala CLI uses the latest stable version of Scala which was tested in Scala CLI (see our list\nof ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/scala-versions"},"Supported Scala Versions"),"). You can specify the Scala version you'd like to use\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"--scala"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile --scala 2.13.6 Hello.scala\n")),(0,i.kt)("p",null,"Scala CLI works with all major ",(0,i.kt)("inlineCode",{parentName:"p"},"2.12.x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2.13.x"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"3.x")," Scala versions."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--scala"),' also accepts "short" Scala versions, such as ',(0,i.kt)("inlineCode",{parentName:"p"},"2.12"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"2"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"3"),". In this\ncase, it picks the highest corresponding stable Scala version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile --scala 2.12 Hello.scala\nscala-cli compile --scala 2 Hello.scala\nscala-cli compile --scala 3 Hello.scala\n")),(0,i.kt)("h2",{id:"scala-nightlies"},"Scala Nightlies"),(0,i.kt)("p",null,"The nightly builds of Scala compiler are the unstable ones which are published on a nightly basis."),(0,i.kt)("p",null,"To use the latest Scala 2 and Scala 3 nightly builds, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"2.nightly")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"3.nightly"),", respectively.\nYou can also request the last ",(0,i.kt)("inlineCode",{parentName:"p"},"2.12.nightly")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"2.13.nightly")," versions. ",(0,i.kt)("inlineCode",{parentName:"p"},"2.13.nightly")," is the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"2.nightly"),".\nMoreover, passing in the ",(0,i.kt)("inlineCode",{parentName:"p"},"3.{sub binary number}.nightly")," format, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"3.0.nightly")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"3.1.nightly")," is accepted,\ntoo."),(0,i.kt)("p",null,"Scala CLI takes care of fetching the nightly builds of Scala 2 and Scala 3 from different repositories, without you\nhaving to pass their addresses as input after the ",(0,i.kt)("inlineCode",{parentName:"p"},"--repo")," flag."),(0,i.kt)("p",null,"For compiling with the latest Scala 2 nightly build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala -S 2.nightly\n")),(0,i.kt)("p",null,"For compiling with the latest Scala 3 nightly build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala -S 3.nightly\n")),(0,i.kt)("p",null,"For compiling with a specific nightly build you have the full version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala -S 2.13.9-bin-4505094\n")),(0,i.kt)("p",null,"For setting this inside scala files, use ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/using-directives"},(0,i.kt)("inlineCode",{parentName:"a"},"using")," directives"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},"//> using scala 2.nightly\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},"//> using scala 3.nightly\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},"//> using scala 2.13.9-bin-4505094\n")),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"You can add dependencies on the command-line with ",(0,i.kt)("inlineCode",{parentName:"p"},"--dependency"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala \\\n  --dependency org.scala-lang.modules::scala-parallel-collections:1.0.4\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"--dependency")," is only meant as a convenience. You should favor\nadding dependencies in the source files themselves via ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/configuration#special-imports"},(0,i.kt)("inlineCode",{parentName:"a"},"using")," directives"),"."),(0,i.kt)("p",null,"You can also add simple JAR files \u2014 those that don\u2019t have transitive dependencies \u2014 as dependencies, with ",(0,i.kt)("inlineCode",{parentName:"p"},"--jar"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala --jar /path/to/library.jar\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/dependencies"},"Dependency management")," guide for more details."),(0,i.kt)("h2",{id:"scala-compiler-options"},"Scala compiler options"),(0,i.kt)("h3",{id:"passing-compiler-options-with--o"},"Passing compiler options with ",(0,i.kt)("inlineCode",{parentName:"h3"},"-O")),(0,i.kt)("p",null,"All ",(0,i.kt)("a",{parentName:"p",href:"https://docs.scala-lang.org/overviews/compiler-options"},"Scala compiler options")," can be passed to Scala CLI\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},"-O"),":"),(0,i.kt)(o.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala -O -deprecation -O -Xlint:infer-any\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"[warn] ./Hello.scala:3:7: method x in class Some is deprecated (since 2.12.0): Use .value instead.\n[warn]   opt.x\n[warn]       ^\n"))),(0,i.kt)("p",null,"Passing a value to a compiler option requires another ",(0,i.kt)("inlineCode",{parentName:"p"},"-O"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -O -Xshow-phases -O -color -O never\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Scala CLI uses ",(0,i.kt)("inlineCode",{parentName:"p"},"bloop")," by default, which at times gets in the way of getting the full compiler output.\nIn the case of some compiler options it may be necessary to turn ",(0,i.kt)("inlineCode",{parentName:"p"},"bloop")," off with ",(0,i.kt)("inlineCode",{parentName:"p"},"--server=false"),".\nThe Scala CLI team is actively trying to minimize such cases, but for the time being it's a useful workaround.")),(0,i.kt)("h3",{id:"passing-compiler-options-with-using-directives"},"Passing compiler options with ",(0,i.kt)("inlineCode",{parentName:"h3"},"using")," directives"),(0,i.kt)("p",null,"It is also possible to pass compiler options with the appropriate ",(0,i.kt)("inlineCode",{parentName:"p"},"using")," directives."),(0,i.kt)("p",null,"A single option can be passed like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},'//> using option -new-syntax\n@main def hello = if true then println("Hello")\n')),(0,i.kt)("p",null,"It's also possible to pass a value to the option with the same directive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},"//> using option -release 11\n\nimport java.net.http.HttpRequest\n")),(0,i.kt)("p",null,"There's a separate directive for passing multiple options at one time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},'//> using options -new-syntax -rewrite -source:3.2-migration\n\n@main def hello = if (true) println("Hello")\n')),(0,i.kt)("h3",{id:"compiler-options-recognised-even-when-passed-without--o"},"Compiler options recognised even when passed without ",(0,i.kt)("inlineCode",{parentName:"h3"},"-O")),(0,i.kt)("p",null,"For ease of use many compiler options can be passed as-is to Scala CLI, without the need of passing after ",(0,i.kt)("inlineCode",{parentName:"p"},"-O"),":"),(0,i.kt)(o.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala -Xlint:infer-any\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'Compiling project (1 Scala source)\n[warn] ./Hello.scala:2:11: a type was inferred to be `Any`; this may indicate a programming error.\n[warn]   val l = List("a", true, 2, new Object)\n[warn]           ^\nCompiled project\n'))),(0,i.kt)("p",null,"Those include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"all options which start with:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-g")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-language")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-opt")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-P")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-target")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-V")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-W")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-X")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-Y")))),(0,i.kt)("li",{parentName:"ul"},"the following flags:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-nowarn")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-feature")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-deprecation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-rewrite")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-old-syntax")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-new-syntax")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-indent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-no-indent")))),(0,i.kt)("li",{parentName:"ul"},"the following options which accept values (which can be passed similarly to any regular Scala CLI option values)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-encoding")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-color")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-classpath")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-d"))))),(0,i.kt)("p",null,"All options mentioned above are assumed to be Scala compiler options and are being passed as such to the compiler even\nwithout ",(0,i.kt)("inlineCode",{parentName:"p"},"-O"),". (However, they can still be passed with ",(0,i.kt)("inlineCode",{parentName:"p"},"-O"),", regardless.)"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Some compiler options (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"-new-syntax"),") may be Scala-version-specific.\nThus, it may happen that Scala CLI will pass those to the compiler,\nbut they will not be recognised if they're not supported in a given Scala version.\nIn such a case, refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"--scalac-help")," output while passing the appropriate version with ",(0,i.kt)("inlineCode",{parentName:"p"},"-S"),".")),(0,i.kt)("h3",{id:"compiler-options-redirected-to-scala-cli-alternatives"},"Compiler options redirected to Scala CLI alternatives"),(0,i.kt)("p",null,"In a few cases, certain compiler options are being auto-redirected to a corresponding Scala CLI-specific option for\nbetter integration with other functionalities of the tool.\nThe redirection happens even when the options are passed with ",(0,i.kt)("inlineCode",{parentName:"p"},"-O"),", making them effectively aliases for their\nScala CLI counterparts."),(0,i.kt)("p",null,"Those include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-classpath")," being redirected to ",(0,i.kt)("inlineCode",{parentName:"li"},"--classpath")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-d")," being redirected to ",(0,i.kt)("inlineCode",{parentName:"li"},"--compilation-output"))),(0,i.kt)("h3",{id:"scala-compiler-help"},"Scala compiler help"),(0,i.kt)("p",null,"Certain compiler options allow to view relevant help. Inputs aren't required when those are passed.\n(since they would be disregarded anyway)"),(0,i.kt)("p",null,"Those include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-help")),(0,i.kt)("li",{parentName:"ul"},"all options prefixed with:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-V")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-W")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-X")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"-Y"))))),(0,i.kt)(o.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -S 2.12.17 -Xshow-phases\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\n     phase name  id  description\n     ----------  --  -----------\n         parser   1  parse source into ASTs, perform simple desugaring\n          namer   2  resolve names, attach symbols to named trees\n packageobjects   3  load package objects\n          typer   4  the meat and potatoes: type the trees\n         patmat   5  translate match expressions\n superaccessors   6  add super accessors in traits and nested classes\n     extmethods   7  add extension methods for inline classes\n        pickler   8  serialize symbol tables\n      refchecks   9  reference/override checking, translate nested objects\n        uncurry  10  uncurry, translate function values to anonymous classes\n         fields  11  synthesize accessors and fields, add bitmaps for lazy vals\n      tailcalls  12  replace tail calls by jumps\n     specialize  13  @specialized-driven class and method specialization\n  explicitouter  14  this refs to outer pointers\n        erasure  15  erase types, add interfaces for traits\n    posterasure  16  clean up erased inline classes\n     lambdalift  17  move nested functions to top level\n   constructors  18  move field definitions into constructors\n        flatten  19  eliminate inner classes\n          mixin  20  mixin composition\n        cleanup  21  platform-specific cleanups, generate reflective calls\n     delambdafy  22  remove lambdas\n            jvm  23  generate JVM bytecode\n       terminal  24  the last phase during a compilation run\n"))),(0,i.kt)("p",null,"You can also view the Scala compiler help for a particular Scala version with ",(0,i.kt)("inlineCode",{parentName:"p"},"--scalac-help"),", which is just an alias\nfor ",(0,i.kt)("inlineCode",{parentName:"p"},"-O -help"),".\nPlease note that ",(0,i.kt)("inlineCode",{parentName:"p"},"-help")," passed without ",(0,i.kt)("inlineCode",{parentName:"p"},"-O")," will show the Scala CLI help instead."),(0,i.kt)(o.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli -S 2.13.8 --scalac-help\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Usage: scalac <options> <source files>\n\nStandard options:\n  -Dproperty=value             Pass -Dproperty=value directly to the runtime system.\n  -J<flag>                     Pass <flag> directly to the runtime system.\n  -P:<plugin>:<opt>            Pass an option to a plugin\n  -V                           Print a synopsis of verbose options. [false]\n  -W                           Print a synopsis of warning options. [false]\n  -Werror                      Fail the compilation if there are any warnings. [false]\n  -X                           Print a synopsis of advanced options. [false]\n  -Y                           Print a synopsis of private options. [false]\n  -bootclasspath <path>        Override location of bootstrap class files.\n  -classpath <path>            Specify where to find user class files.\n  -d <directory|jar>           destination for generated classfiles.\n  -dependencyfile <file>       Set dependency tracking file.\n  -deprecation                 Emit warning and location for usages of deprecated APIs. See also -Wconf. [false]\n  -encoding <encoding>         Specify character encoding used by source files.\n  -explaintypes                Explain type errors in more detail. [false]\n  -extdirs <path>              Override location of installed extensions.\n  -feature                     Emit warning and location for usages of features that should be imported explicitly. See also -Wconf. [false]\n  -g:<level>                   Set level of generated debugging info. (none,source,line,[vars],notailcalls)\n  -help                        Print a synopsis of standard options [false]\n  -javabootclasspath <path>    Override java boot classpath.\n  -javaextdirs <path>          Override java extdirs classpath.\n  -language:<features>         Enable or disable language features\n  -no-specialization           Ignore @specialize annotations. [false]\n  -nobootcp                    Do not use the boot classpath for the scala jars. [false]\n  -nowarn                      Generate no warnings. [false]\n  -opt:<optimizations>         Enable optimizations, `help` for details.\n  -opt-inline-from:<patterns>  Patterns for classfile names from which to allow inlining, `help` for details.\n  -opt-warnings:<warnings>     Enable optimizer warnings, `help` for details.\n  -print                       Print program with Scala-specific features removed. [false]\n  -release <release>           Compile for a specific version of the Java platform. Supported targets: 6, 7, 8, 9\n  -rootdir <path>              The absolute path of the project root directory, usually the git/scm checkout. Used by -Wconf.\n  -sourcepath <path>           Specify location(s) of source files.\n  -target:<target>             Target platform for object files. ([8],9,10,11,12,13,14,15,16,17,18)\n  -toolcp <path>               Add to the runner classpath.\n  -unchecked                   Enable additional warnings where generated code depends on assumptions. See also -Wconf. [false]\n  -uniqid                      Uniquely tag all identifiers in debugging output. [false]\n  -usejavacp                   Utilize the java.class.path in classpath resolution. [false]\n  -usemanifestcp               Utilize the manifest in classpath resolution. [false]\n  -verbose                     Output messages about what the compiler is doing. [false]\n  -version                     Print product version and exit. [false]\n  @<file>                      A text file containing compiler arguments (options and source files) [false]\n\nDeprecated settings:\n  -optimize                    Enables optimizations. [false]\n                               deprecated: Since 2.12, enables -opt:l:inline -opt-inline-from:**. See -opt:help.\n"))),(0,i.kt)("h2",{id:"scala-compiler-plugins"},"Scala compiler plugins"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"--compiler-plugin")," to add compiler plugin dependencies:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile Hello.scala --compiler-plugin org.typelevel:::kind-projector:0.13.2 --scala 2.12.14\n")),(0,i.kt)("h2",{id:"printing-a-class-path"},"Printing a class path"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--print-class-path")," makes ",(0,i.kt)("inlineCode",{parentName:"p"},"scala-cli compile")," print a class path:"),(0,i.kt)(o.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli compile --print-class-path Hello.scala\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/work/.scala/project-cef76d561e/classes:~/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.12.14/scala-library-2.12.14.jar:~/Library/Caches/ScalaCli/local-repo/0.1.0/org.virtuslab.scala-cli/runner_2.12/0.0.1-SNAPSHOT/jars/runner_2.12.jar:~/Library/Caches/ScalaCli/local-repo/0.1.0/org.virtuslab.scala-cli/stubs/0.0.1-SNAPSHOT/jars/stubs.jar\n"))),(0,i.kt)("p",null,"This is handy when working with other tools.\nFor example, you can pass this class path to ",(0,i.kt)("inlineCode",{parentName:"p"},"java -cp"),":"),(0,i.kt)(o.v,{mdxType:"ChainedSnippets"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'java -cp "$(scala-cli compile --print-class-path Hello.scala)" Hello\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Hello\n"))),(0,i.kt)("p",null,"Note that you should favor the ",(0,i.kt)("a",{parentName:"p",href:"/docs/commands/run"},(0,i.kt)("inlineCode",{parentName:"a"},"run"))," command to run your code, rather than running ",(0,i.kt)("inlineCode",{parentName:"p"},"java -cp"),".\nThe class path obtained this way is only meant for scenarios where Scala CLI doesn't offer a more convenient option."),(0,i.kt)("p",null,"If you need the class path to consist only of JAR files, pass ",(0,i.kt)("inlineCode",{parentName:"p"},"--as-jar"),". This packages the Scala CLI project\nbyte code in a JAR file, rather than leaving it in a directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"ignore",ignore:!0},"scala-cli compile --print-class-path Hello.scala --as-jar\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/work/.scala-build/project_103be31561-475e1607f5/jar/library.jar:~/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala3-library_3/3.2.2/scala3-library_3-3.2.2.jar:~/Library/Caches/Coursier/v1/https/repo1.maven.org/maven2/org/scala-lang/scala-library/2.13.10/scala-library-2.13.10.jar\n")),(0,i.kt)("h3",{id:"jvm-options"},"JVM options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--javac-opt")," lets you add ",(0,i.kt)("inlineCode",{parentName:"p"},"javac")," options which will be passed when compiling sources."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"scala-cli Hello.scala --javac-opt source --javac-opt 1.8 --javac-opt target --javac-opt 1.8\n")),(0,i.kt)("p",null,"You can also add javac options with the using directive ",(0,i.kt)("inlineCode",{parentName:"p"},"//> using javacOpt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile",compile:!0},"//> using javacOpt source 1.8 target 1.8\n")),(0,i.kt)("h2",{id:"exclude-sources"},"Exclude sources"),(0,i.kt)("p",null,"To exclude specific source files or entire directories from a Scala CLI project, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude")," directive or command\nline parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"--exclude")," along with a pattern:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"an absolute path: ",(0,i.kt)("inlineCode",{parentName:"li"},"/root/path/to/your/project/Main.scala")),(0,i.kt)("li",{parentName:"ul"},"a relative path: ",(0,i.kt)("inlineCode",{parentName:"li"},"src/main/scala/Main.scala")),(0,i.kt)("li",{parentName:"ul"},"a glob pattern: ",(0,i.kt)("inlineCode",{parentName:"li"},"*.sc"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"exclude")," directive should be placed in your ",(0,i.kt)("inlineCode",{parentName:"p"},"project.scala")," file, which Scala CLI uses to determine the project\nroot directory.\nFor more details on ",(0,i.kt)("inlineCode",{parentName:"p"},"project.file"),", see ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/root-dir"},"the ",(0,i.kt)("inlineCode",{parentName:"a"},"Project root directory")," reference"),".")),(0,i.kt)("p",null,"For example, to exclude all files in the ",(0,i.kt)("inlineCode",{parentName:"p"},"example/scala")," directory, add the following directive to your\n",(0,i.kt)("inlineCode",{parentName:"p"},"project.file")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=project.scala",title:"project.scala"},'//> using exclude "example/scala"\n')),(0,i.kt)("h2",{id:"compile-only-dependencies"},"Compile-Only Dependencies"),(0,i.kt)("p",null,"Compile-only dependencies, allow to include certain libraries exclusively at the time of the compilation. These\ndependencies are added to the class path during compilation, but won't be included when the application is run."),(0,i.kt)("p",null,"To declare a compile-only dependency, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"compileOnly.lib")," directive or ",(0,i.kt)("inlineCode",{parentName:"p"},"--compile-lib")," command line\noption. For instance, to include the ",(0,i.kt)("inlineCode",{parentName:"p"},"jsoniter-scala-macros")," library at compile-time, you would use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala",metastring:"title=CompileOnly.scala",title:"CompileOnly.scala"},'//> using compileOnly.lib "com.github.plokhotnyuk.jsoniter-scala::jsoniter-scala-macros:2.23.2"\n')),(0,i.kt)("p",null,"or by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--compile-lib")," command line option:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'scala-cli Hello.scala --compile-lib "com.github.plokhotnyuk.jsoniter-scala::jsoniter-scala-macros:2.23.2"\n')))}h.isMDXComponent=!0}}]);
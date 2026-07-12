import org.scalajs.linker.interface.ModuleSplitStyle
val scala3Version = "3.8.3"
val http4sVersion = "0.23.32"
val catsEffectVersion = "3.7.0"
val fs2Version = "3.13.0"
val laminarVersion = "17.2.1"
val jsoniterVersion = "2.38.10"
val scalajsDomVersion = "2.8.0"

lazy val extension = project
  .in(file("extension"))
  .enablePlugins(ScalaJSPlugin)
  .settings(
    name := "clausula",
    scalaVersion := scala3Version,
    scalaJSUseMainModuleInitializer := true,
    scalaJSLinkerConfig ~= {
      _.withModuleKind(ModuleKind.NoModule)
    },
    libraryDependencies ++= Seq(
      "com.raquo" %%% "laminar" % laminarVersion,
      "org.scala-js" %%% "scalajs-dom" % scalajsDomVersion,
      "com.github.plokhotnyuk.jsoniter-scala" %%% "jsoniter-scala-core" % jsoniterVersion,
      "com.github.plokhotnyuk.jsoniter-scala" %%% "jsoniter-scala-macros" % jsoniterVersion,
      "org.typelevel" %%% "cats-core" % "2.13.0"
    ),
    Compile / fastLinkJS / scalaJSLinkerOutputDirectory :=
      (ThisBuild / baseDirectory).value / "dist" / "js",
    Compile / fullLinkJS / scalaJSLinkerOutputDirectory :=
      (ThisBuild / baseDirectory).value / "dist" / "js"
  )
lazy val root = project
  .in(file("."))
  .aggregate(extension)
  .settings(
    name := "clausula",
    scalaVersion := scala3Version
  )

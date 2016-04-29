(defproject testindexdb "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main testindexdb.core
  :dependencies [[org.clojure/clojure "1.8.0"]
                [org.clojure/clojurescript "1.8.51"]
                [reagent "0.5.0"]
                [org.clojure/core.async "0.2.374"]                               
                [alandipert/storage-atom "1.2.4"]
                [cljs-ajax "0.5.4"]
  ]
  :plugins [[lein-cljsbuild "1.1.3"]]
  :cljsbuild {
    :builds [{
        :id "dev"
        ; The path to the top-level ClojureScript source directory:
        :source-paths ["src"]
        ; The standard ClojureScript compiler options:
        ; (See the ClojureScript compiler documentation for details.)
        :compiler {
          :output-to "resources/public/javascripts/main.js"  ; default: target/cljsbuild-main.js
          :output-dir "resources/public/javascripts/cljs-dev"
          :optimizations :none
          :pretty-print true}}]}
)

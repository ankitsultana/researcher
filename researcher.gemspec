# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "researcher"
  spec.version       = "0.0.3"
  spec.authors       = ["ankitsultana"]
  spec.email         = ["ankitsultana@gmail.com"]

  spec.summary       = %q{A Jekyll Theme ideal for resumes}
  spec.homepage      = "https://ankitsultana.com/researcher"
  spec.license       = "GPL-3.0-only"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(_layouts|_includes|_sass|LICENSE|README)/i}) }

  spec.add_development_dependency "jekyll", "~> 3.2"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end

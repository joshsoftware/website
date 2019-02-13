require 'mina/bundler'
require 'mina/rails'
require 'mina/git'
require 'mina/rvm'    # for rvm support. (http://rvm.io)
# require 'mina/rbenv'  # for rbenv support. (http://rbenv.org)

# Basic settings:
#   domain       - The hostname to SSH to.
#   deploy_to    - Path to deploy into.
#   repository   - Git repo to clone from. (needed by mina/git)
#   branch       - Branch name to deploy. (needed by mina/git)

set :domain, '139.59.30.77'
set :deploy_to, '/home/deploy/projects/website_new'
set :repository, 'git@github.com:joshsoftware/website.git'
set :branch, 'contact_us_optimised'

#set :identity_file, "#{ENV['HOME']}/.ssh/id_joshsite_rsa"
set :user, 'deploy'    # Username in the server to SSH to.
#set :forward_agent, true
# Manually create these paths in shared/ (eg: shared/config/database.yml) in your server.
# They will be linked in the 'deploy:link_shared_paths' step.
set :shared_paths, ['node_modules', 'bower_components']

# Optional settings:
#   set :port, '30000'     # SSH port number.

# This task is the environment that is loaded for most commands, such as
# `mina deploy` or `mina rake`.
task :environment do
  # If you're using rbenv, use this to load the rbenv environment.
  # Be sure to commit your .rbenv-version to your repository.
  # invoke :'rbenv:load'

  # For those using RVM, use this to load an RVM version@gemset.
  invoke :'load_nvm'
end


task :load_nvm do
  queue 'echo "-----> Loading nvm"'
  queue %{
    source ~/.nvm/nvm.sh
  }
  queue 'echo "-----> Now using nvm v.`nvm --version`"'
end

# Put any custom mkdir's in here for when `mina setup` is ran.
# For Rails apps, we'll make some of the shared paths that are shared between
# all releases.
task :setup => :environment do
  queue %[mkdir -p "#{deploy_to}/shared/node_modules"]
  queue %[chmod g+rx,u+rwx "#{deploy_to}/shared/node_modules"]

  queue %[mkdir -p "#{deploy_to}/shared/bower_components"]
  queue %[chmod g+rx,u+rwx "#{deploy_to}/shared/bower_components"]

end

desc "Deploys the current version to the server."
task :deploy => :environment do
  deploy do
    # Put things that will set up an empty directory into a fully set-up
    # instance of your project.

    invoke :'git:clone'
    invoke :'deploy:link_shared_paths'
    invoke :'deploy:cleanup'
    invoke :'npm_install'
    invoke :'build_gulp'

  end
end


task :npm_install do
  #queue "npm install"
  queue "npm install"
end

task :build_gulp do
  queue "gulp serve:dist"
  #queue "cd #{deploy_to}/#{current_path} && gulp serve:dist"
end

namespace :passenger do
  desc 'restart passenger'
  task :restart_passenger do
    command "touch #{deploy_to}/current/tmp/restart.txt"
  end
end

namespace :application do
  desc 'Restart the application'
  task :restart => :environment do
    invoke 'passenger:restart_passenger'
    command 'bundle exec whenever -i website'
  end
end

